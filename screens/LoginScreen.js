import AuthContent from "../components/Auth/AuthContent";
import {useState} from "react";
import {signInUser} from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {Alert} from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginUpHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      await signInUser(email, password);
    } catch (_) {
      Alert.alert("Authentification failed!", "Please try again", [
        {text: "Okay"},
      ]);
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Loggin you in..."} />;
  }

  return <AuthContent isLogin onAuthenticate={loginUpHandler} />;
}

export default LoginScreen;
