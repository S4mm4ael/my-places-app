import React, {useContext} from "react";
import {ExpensesOutput} from "../components/Expenses";
import {ExpensesContext} from "../stores/expenses-context";
import {getRecentExpenses} from "./expensesUtils";

const expensesName = "Recent 7 days";

export const RecentExpenses = () => {
  const {expenses} = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={getRecentExpenses(expenses)}
      expensesName={expensesName}
    />
  );
};
