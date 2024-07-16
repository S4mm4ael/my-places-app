import React, {useCallback, useContext, useEffect, useState} from "react";
import {ExpensesOutput} from "../components/Expenses";
import {ExpensesContext} from "../stores/expenses-context";
import {getRecentExpenses} from "./expensesUtils";
import {fetchExpenses} from "../utils/api";
import {Expense} from "../constants";
import {LoadingOverlay} from "../components/UI/LoadingOverlay";

const expensesName = "Recent 7 days";

export const RecentExpenses = () => {
  const {expenses, setExpenses: setExpensesLocally} =
    useContext(ExpensesContext);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getExpenses() {
      setIsLoading(true);
      const expenses = await fetchExpenses();
      setExpensesLocally(expenses);
      setIsLoading(false);
    }

    getExpenses();
  }, []);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expenses={getRecentExpenses(expenses)}
      expensesName={expensesName}
    />
  );
};
