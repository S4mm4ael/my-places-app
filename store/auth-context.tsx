import {createContext, useState, ReactNode, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  logout: () => {},
  authenticate: (token: string) => {
    console.log("CTX", token);
  },
});

function AuthContextProvider({children}: {children: ReactNode}) {
  const [authToken, setAuthToken] = useState<string>("");

  useEffect(() => {
    async function fetchToken() {
      AsyncStorage.getItem("token")
        .then((token) => {
          token && setAuthToken(token);
        })
        .catch((error) => {
          console.error("Error fetching token", error);
        });
    }
    fetchToken();
  }, []);

  function authenticate(token: string) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  }

  function logout() {
    setAuthToken("");
    AsyncStorage.removeItem("token");
  }

  const value = {
    token: authToken,
    isLoggedIn: !!authToken,
    logout: logout,
    authenticate: authenticate,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
