import {View, Text} from "react-native";
import React from "react";
import {Expense} from "../../constants";

interface IProps {
  expenses: Expense[];
  periodName: string;
}

export const ExpensesSummary = ({expenses, periodName}: IProps) => {
  const expensesSum = expenses?.reduce((sum: number, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      {expensesSum ? (
        <Text>${expensesSum?.toFixed(2)}</Text>
      ) : (
        <Text>No expenses to show</Text>
      )}
    </View>
  );
};
