import {View, Text, StyleSheet} from "react-native";
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
    <View style={styles.container}>
      <Text style={styles.periodName}>{periodName}</Text>
      {expensesSum ? (
        <Text style={styles.expensesSum}>${expensesSum?.toFixed(2)}</Text>
      ) : (
        <Text style={styles.noExpenses}>No expenses to show</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
  periodName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  expensesSum: {
    fontSize: 18,
    color: "#4CAF50",
    marginTop: 10,
  },
  noExpenses: {
    fontSize: 18,
    color: "#FF5722",
    marginTop: 10,
  },
});
