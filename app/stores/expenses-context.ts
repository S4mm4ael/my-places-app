import React, {ReactElement} from "react";
import {Expense} from "../constants";

interface ExpensesContextType {
  expenses: Expense[];
  addExpense: ({description, amount, date}: Expense) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, {description, amount, date}: Expense) => void;
}

const expensesContextObject: ExpensesContextType = {
  expenses: [],
  addExpense: ({description, amount, date}: Expense) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (id: string, {description, amount, date}: Expense) => {},
};

export const ExpensesContext = React.createContext<ExpensesContextType>(
  expensesContextObject
);

const ExpensesContextProvider = ({children}: {children: ReactElement}) => {
  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
