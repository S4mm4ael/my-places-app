import axios from "../node_modules/axios";
import {UserCredentials} from "@/types";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY as string;

async function authenticate(mode: string, email: string, password: string) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

async function createNewUser({email, password}: UserCredentials) {
  await authenticate("signUp", email, password);
}

async function signInUser({email, password}: UserCredentials) {
  await authenticate("signInWithPassword", email, password);
}

export {createNewUser, signInUser};
