import AuthContent from "../components/Auth/AuthContent";
import {useState} from "react";
import {signInUser} from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginUpHandler({email, password}) {
    console.log(email, password);
    setIsAuthenticating(true);
    await signInUser(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Loggin you in..."} />;
  }

  return <AuthContent isLogin onAuthenticate={loginUpHandler} />;
}

export default LoginScreen;
