import React, {useCallback, useContext, useEffect, useState} from "react";
import {ExpensesOutput} from "../components/Expenses";
import {ExpensesContext} from "../stores/expenses-context";
import {getRecentExpenses} from "./expensesUtils";
import {fetchExpenses} from "../utils/api";
import {Expense} from "../constants";

const expensesName = "Recent 7 days";

export const RecentExpenses = () => {
  const {expenses, setExpenses: setExpensesLocally} =
    useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      setExpensesLocally(expenses);
    }

    getExpenses();
  }, []);

  return (
    <ExpensesOutput
      expenses={getRecentExpenses(expenses)}
      expensesName={expensesName}
    />
  );
};
