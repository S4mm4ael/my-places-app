import {View, Text} from "react-native";
import React, {useContext} from "react";
import {ExpensesOutput} from "../components/Expenses";
import {mockedExpenses} from "../components/Expenses/data";
import {ExpensesContext} from "../stores/expenses-context";

const expensesName = "All";

export const AllExpenses = () => {
  const {expenses} = useContext(ExpensesContext);

  return <ExpensesOutput expenses={expenses} expensesName={expensesName} />;
};
