import axios from "axios";
import {Expense} from "../constants";

const baseURL =
  "https://react-native-workshop-da895-default-rtdb.europe-west1.firebasedatabase.app/";

function storeExpense(expenseData: Partial<Expense>) {
  const itemRoute = "expenses.json";
  const finalRoute = baseURL + itemRoute;
  axios.post(finalRoute, expenseData);
  console.log("📡 POST", finalRoute, {...expenseData});
}

export {storeExpense};
