import {View} from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const ExpensesOutput = ({expenses, expensesName}) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesName} />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;
