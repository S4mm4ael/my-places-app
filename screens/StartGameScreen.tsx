import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View>
      <TextInput />
      <PrimaryButton buttonText="Reset" />
      <PrimaryButton buttonText="Confirm" />
    </View>
  );
}

export default StartGameScreen;
