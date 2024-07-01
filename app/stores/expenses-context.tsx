import {ReactElement, useReducer, createContext} from "react";
import {Expense} from "../constants";
import {mockedExpenses} from "../components/Expenses/data";

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

export const ExpensesContext = createContext<ExpensesContextType>(
  expensesContextObject
);

function ExpensesReducer(state: Expense[], action: any) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE":
      return state.map((expense) =>
        expense.id === action.payload.id ? action.payload : expense
      );
    default:
      return state;
  }
}

export const ExpensesContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [expensesState, dispatch] = useReducer(ExpensesReducer, mockedExpenses);

  const addExpense = ({description, amount, date}: Expense) => {
    dispatch({
      type: "ADD",
      payload: {
        id: Math.random().toString() + new Date().toISOString(),
        description,
        amount,
        date,
      },
    });
  };

  const deleteExpense = (id: string) => {
    dispatch({type: "DELETE", payload: id});
  };

  const updateExpense = (id: string, {description, amount, date}: Expense) => {
    dispatch({
      type: "UPDATE",
      payload: {
        id,
        description,
        amount,
        date,
      },
    });
  };

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
};
