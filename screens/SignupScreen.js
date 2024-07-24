import {useState} from "react";
import {Alert} from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import {createNewUser} from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {useContext} from "react";
import {AuthContext} from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const {authenticate} = useContext(AuthContext);

  async function signUpHandler(email, password) {
    setIsAuthenticating(true);
    try {
      const token = await createNewUser(email, password);
      authenticate(token);
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
