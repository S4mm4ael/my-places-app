import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, {useContext, useEffect, useState} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {ExpensesContext} from "../stores/expenses-context";
import {ExpenseForm} from "../components/ManageExpenses";
import {Expense} from "../constants";
import {storeExpense, updateExpense, deleteExpense} from "../utils/api";
import {LoadingOverlay, IconButton, ErrorOverlay} from "../components/UI";

export const ManageExpense = () => {
  const {
    expenses,
    addExpense,
    deleteExpense: deleteExpenseLocally,
    updateExpense: updateExpenseLocally,
  } = useContext(ExpensesContext);
  const route = useRoute();
  const {goBack, setOptions} = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const id = (route.params as {id?: string})?.id ?? "-1";
  const isEdit = id !== "-1";

  let selectedExpense = undefined;
  isEdit && (selectedExpense = expenses.find((e) => e.id === id));

  useEffect(() => {
    setOptions({
      title: isEdit ? `Edit Expense ${id}` : "Add Expense",
    });
  }, [isEdit, setOptions]);

  const deleteButtonHandler = async () => {
    setIsLoading(true);
    try {
      await deleteExpense(id);
      deleteExpenseLocally(id);
      goBack();
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  const cancelButtonHandler = () => {
    isEdit ? deleteButtonHandler() : goBack();
  };

  const confirmButtonHandler = async (expenseData: Expense) => {
    setIsLoading(true);

    try {
      if (isEdit) {
        updateExpenseLocally(expenseData.id, expenseData);
        await updateExpense(expenseData.id, expenseData);
      } else {
        const body = {
          amount: expenseData.amount,
          date: expenseData.date,
          description: expenseData.description,
        };
        const id = await storeExpense(body);
        addExpense({...expenseData, id});
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    }

    goBack();
  };

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (errorMessage) {
    return (
      <ErrorOverlay
        errorMessage={errorMessage}
        onConfirm={() => setErrorMessage(null)}
      />
    );
  }

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
