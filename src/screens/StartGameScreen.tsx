import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import { colors } from "../global/constatnts";

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
    <View style={styles.inputContainer}>
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
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    height: 150,
    backgroundColor: colors.PrimeRed,
    alignItems: "center",
    marginTop: 64,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    //Android specific:
    elevation: 4,
    //IOs
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
