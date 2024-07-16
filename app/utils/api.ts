import axios from "axios";
import {Expense} from "../constants";

const BASE_URL =
  "https://react-native-workshop-da895-default-rtdb.europe-west1.firebasedatabase.app/";
const ROUTES = {
  expenses: "expenses.json",
};

function apiLogger(method: string, route: string, data?: any) {
  console.log(
    ` 📡 ${method} \n`,
    `🛣️ ROUTE: \n`,
    route,
    ` \n`,
    `💽 DATA: \n`,
    data ?? "NO DATA"
  );
}

function storeExpense(expenseData: Omit<Expense, "id">) {
  const finalRoute = BASE_URL + ROUTES.expenses;
  axios.post(finalRoute, expenseData);
  apiLogger("POST", finalRoute, expenseData);
}

async function fetchExpenses() {
  const finalRoute = BASE_URL + ROUTES.expenses;
  const response = await axios.get(finalRoute);

  const expenses: Expense[] = [];

  for (const key in response.data) {
    expenses.push({
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    });
  }

  apiLogger("GET", finalRoute, response.data);

  return expenses;
}

export {storeExpense, fetchExpenses};
