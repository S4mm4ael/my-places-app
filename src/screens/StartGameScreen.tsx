import { Alert, StyleSheet, TextInput, View, Text } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import { useState } from "react";
import { colors } from "../global/constatnts";
import { Title } from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";

interface StartGameScreenProps {
  onPickNumber: (pickedNumber: number) => void;
}

function StartGameScreen({ onPickNumber }: StartGameScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText: string) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function submitInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    console.log("submit", enteredNumber);
    if (chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title text="Guess my number" />
      <Card>
        <InstructionText text="Enter your number" />
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton buttonText="Reset" onPress={resetInputHandler} />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton buttonText="Confirm" onPress={submitInputHandler} />
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 56,
    width: 56,
    fontSize: 32,
    borderBottomColor: colors.PrimeYellow,
    borderBottomWidth: 2,
    color: colors.PrimeYellow,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
