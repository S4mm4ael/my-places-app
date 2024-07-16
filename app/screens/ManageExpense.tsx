import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, {useContext} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {ExpensesContext} from "../stores/expenses-context";
import {ExpenseForm} from "../components/ManageExpenses";
import {IconButton} from "../components/UI/IconButton";
import {Expense} from "../constants";
import {storeExpense} from "../utils/api";

export const ManageExpense = () => {
  const expensesContext = useContext(ExpensesContext);
  const route = useRoute();
  const {goBack, setOptions} = useNavigation();

  const id = (route.params as {id?: string})?.id ?? "-1";
  const isEdit = id !== "-1";

  let selectedExpense = undefined;
  isEdit &&
    (selectedExpense = expensesContext.expenses.find((e) => e.id === id));

  React.useEffect(() => {
    setOptions({
      title: isEdit ? `Edit Expense ${id}` : "Add Expense",
    });
  }, [isEdit, setOptions]);

  const deleteButtonHandler = () => {
    expensesContext.deleteExpense(id);
    goBack();
  };

  const cancelButtonHandler = () => {
    isEdit ? deleteButtonHandler() : goBack();
  };

  const confirmButtonHandler = (expenseData: Expense) => {
    if (isEdit) {
      expensesContext.updateExpense(expenseData.id, expenseData);
    } else {
      storeExpense(expenseData);
      expensesContext.addExpense(expenseData);
    }
    goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ExpenseForm
          expenseId={id}
          onCancel={cancelButtonHandler}
          onSubmit={confirmButtonHandler}
          defaultValues={selectedExpense ?? null}
          confirmText={isEdit ? "Update" : "Add"}
          iconButton={() => {
            return isEdit ? (
              <IconButton
                icon="trash"
                color="red"
                onPress={deleteButtonHandler}
              />
            ) : (
              <></>
            );
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
});
