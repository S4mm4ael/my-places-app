import {ReactElement, useReducer, createContext, useState} from "react";
import {Expense} from "../constants";

interface ExpensesContextType {
  expenses: Expense[];
  addExpense: ({description, amount, date}: Expense) => void;
  setExpenses: (expenses: Expense[]) => void;
  deleteExpense: (id: string | undefined) => void;
  updateExpense: (id: string, {description, amount, date}: Expense) => void;
}

const expensesContextObject: ExpensesContextType = {
  expenses: [],
  addExpense: ({description, amount, date}: Expense) => {},
  setExpenses: (expenses: Expense[]) => {},
  deleteExpense: (id: string | undefined) => {},
  updateExpense: (id: string, {description, amount, date}: Expense) => {},
};

export const ExpensesContext = createContext<ExpensesContextType>(
  expensesContextObject
);

function ExpensesReducer(state: Expense[], action: any) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      return action.payload.reverse();
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
  const [expensesState, dispatch] = useReducer(ExpensesReducer, [[]]);
  const [reload, setReload] = useState(false);

  const triggerReload = () => setReload(!reload);

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

  const setExpenses = (expenses: Expense[]) => {
    dispatch({type: "SET", payload: expenses});
    triggerReload();
  };

  const deleteExpense = (id: string | undefined) => {
    id ? dispatch({type: "DELETE", payload: id}) : console.log("No id");
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

  const value = {
    expenses: expensesState,
    addExpense,
    setExpenses,
    deleteExpense,
    updateExpense,
    reload,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};
