import {View, Text} from "react-native";
import React, {useContext} from "react";
import {ExpensesOutput} from "../components/Expenses";
import {mockedExpenses} from "../components/Expenses/data";
import {ExpensesContext} from "../stores/expenses-context";

const expensesName = "Recent 7 days";

export const RecentExpenses = () => {
  const {expenses} = useContext(ExpensesContext);

  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    const currentDate = new Date();

    const secondsInDay = 1000 * 60 * 60 * 24;

    const diffTime = Math.abs(currentDate.getTime() - expenseDate.getTime());
    const diffDays = Math.ceil(diffTime / secondsInDay);

    return diffDays <= 7;
  });

  return (
    <ExpensesOutput expenses={filteredExpenses} expensesName={expensesName} />
  );
};
