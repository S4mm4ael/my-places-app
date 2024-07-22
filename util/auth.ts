import axios from "../node_modules/axios";
import {UserCredentials} from "@/types";

const API_KEY = process.env.API_KEY as string;

async function createNewUser({email, password}: UserCredentials) {
  const respose = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
