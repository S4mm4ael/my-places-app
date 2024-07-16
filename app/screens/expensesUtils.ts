import {Expense} from "../constants";

function getRecentExpenses(expenses: Expense[]): Expense[] {
  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    const currentDate = new Date();

    const secondsInDay = 1000 * 60 * 60 * 24;

    const diffTime = Math.abs(currentDate.getTime() - expenseDate.getTime());
    const diffDays = Math.ceil(diffTime / secondsInDay);

    return diffDays <= 7;
  });
  return filteredExpenses;
}

export {getRecentExpenses};
