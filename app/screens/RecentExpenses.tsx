import React, {useCallback, useContext, useEffect, useState} from "react";
import {ExpensesOutput} from "../components/Expenses";
import {ExpensesContext} from "../stores/expenses-context";
import {getRecentExpenses} from "./expensesUtils";
import {fetchExpenses} from "../utils/api";
import {ErrorOverlay, LoadingOverlay} from "../components/UI";

const expensesName = "Recent 7 days";

export const RecentExpenses = () => {
  const {expenses, setExpenses: setExpensesLocally} =
    useContext(ExpensesContext);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    async function getExpenses() {
      setIsLoading(true);
      try {
        const expenses = await fetchExpenses();
        setExpensesLocally(expenses);
      } catch (error: any) {
        setErrorMessage(error.message);
      }

      setIsLoading(false);
    }

    getExpenses();
  }, []);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (errorMessage) {
    return (
      <ErrorOverlay
        errorMessage={errorMessage}
        onConfirm={() => setErrorMessage(null)}
      />
    );
  }

  return (
    <ExpensesOutput
      expenses={getRecentExpenses(expenses)}
      expensesName={expensesName}
    />
  );
};
