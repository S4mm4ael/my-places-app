import {View, StyleSheet} from "react-native";
import React, {useContext} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {IconButton} from "../components/UI/IconButton";
import {Colors} from "../constants";
import Button from "../components/UI/Button";
import {ExpensesContext} from "../stores/expenses-context";

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
    goBack();
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
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={cancelButtonHandler} />
        <Button
          title={isEdit ? "Update" : "Add"}
          onPress={confirmButtonHandler}
          color={Colors.green}
        />
        {isEdit ? (
          <IconButton icon="trash" color="red" onPress={deleteButtonHandler} />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
});
