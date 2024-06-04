import {View} from "react-native";
import React from "react";
import {ExpensesSummary} from "./ExpensesSummary";
import {ExpensesList} from "./ExpensesList";
import {Expense} from "../../constants";

interface Props {
  expenses: Expense[];
  expensesName: string;
}

export const ExpensesOutput = ({expenses, expensesName}: Props) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesName} />
      <ExpensesList />
    </View>
  );
};
