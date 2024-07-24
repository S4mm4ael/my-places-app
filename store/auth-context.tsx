import {createContext, useState, ReactNode} from "react";

export const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  logout: () => {},
  authenticate: (token: string) => {},
});

function AuthContextProvider({children}: {children: ReactNode}) {
  const [authToken, setAuthToken] = useState<string>("");

  function authenticate(token: string) {
    setAuthToken(token);
  }

  function logout() {
    setAuthToken("");
  }

  const value = {
    token: authToken,
    isLoggedIn: !!authToken,
    logout,
    authenticate,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
