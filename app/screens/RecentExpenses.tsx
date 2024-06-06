import {View, Text} from "react-native";
import React from "react";
import {ExpensesOutput} from "../components/Expenses";
import {mockedExpenses} from "../components/Expenses/data";

const expensesName = "Recent 7 days";

export const RecentExpenses = () => {
  return (
    <ExpensesOutput expenses={mockedExpenses} expensesName={expensesName} />
  );
};
