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

export const ManageExpense = () => {
  const expensesContext = useContext(ExpensesContext);
  const route = useRoute();
  const {goBack, setOptions} = useNavigation();

  const id = (route.params as {id?: string})?.id;
  const isEdit = id !== undefined;

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

  const confirmButtonHandler = () => {
    if (isEdit) {
      expensesContext.updateExpense(id, {
        id: id,
        description: "Updated",
        amount: 100,
        date: new Date(),
      });
    } else {
      expensesContext.addExpense({
        id: new Date().toString() + Math.random().toString(),
        description: "New",
        amount: 100,
        date: new Date(),
      });
    }
    goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ExpenseForm
          onCancel={cancelButtonHandler}
          onSubmit={confirmButtonHandler}
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
