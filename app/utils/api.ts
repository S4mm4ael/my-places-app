import axios from "axios";
import {Expense} from "../constants";

const BASE_URL =
  "https://react-native-workshop-da895-default-rtdb.europe-west1.firebasedatabase.app/";
const ROUTES = {
  expenses: "expenses.json",
};

function storeExpense(expenseData: Omit<Expense, "id">) {
  const finalRoute = BASE_URL + ROUTES.expenses;
  axios.post(finalRoute, expenseData);
  console.log("📡 POST", finalRoute, expenseData);
}

function fetchExpenses() {
  const finalRoute = BASE_URL + ROUTES.expenses;
  const response = axios.get(finalRoute);
  console.log("📡 GET", finalRoute, response);
}

export {storeExpense, fetchExpenses};
