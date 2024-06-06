import {View, Text} from "react-native";
import React from "react";
import {ExpensesOutput} from "../components/Expenses";
import {mockedExpenses} from "../components/Expenses/data";

const expensesName = "All";

export const AllExpenses = () => {
  return (
    <ExpensesOutput expenses={mockedExpenses} expensesName={expensesName} />
  );
};
