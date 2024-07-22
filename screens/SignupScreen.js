import {useState} from "react";
import AuthContent from "../components/Auth/AuthContent";
import {createNewUser} from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler({email, password}) {
    setIsAuthenticating(true);
    await createNewUser(email, password);
    n;
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Creating user..."} />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
