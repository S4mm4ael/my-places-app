import {useState} from "react";
import {Alert} from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import {createNewUser} from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler(email, password) {
    setIsAuthenticating(true);
    try {
      await createNewUser(email, password);
    } catch (_) {
      Alert.alert("Can't create user!", "Please try again", [{text: "Okay"}]);
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Creating user..."} />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
