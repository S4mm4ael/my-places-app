import { Alert, StyleSheet, TextInput, View, Text, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import { useState } from "react";
import { colors } from "../global/constatnts";
import { Title } from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import HorizontalButtonsContainer from "../components/UI/HorizontalButtonsContainer";

interface StartGameScreenProps {
  onPickNumber: (pickedNumber: number) => void;
}

function StartGameScreen({ onPickNumber }: StartGameScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText: string) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function submitInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  }

  const marginTopDistance = height < 300 ? 20 : 60;

  return (
    <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
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
        <HorizontalButtonsContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              childComponent={<Text style={styles.buttonText}>Reset</Text>}
              onPress={resetInputHandler}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              childComponent={<Text style={styles.buttonText}>Confirm</Text>}
              onPress={submitInputHandler}
            />
          </View>
        </HorizontalButtonsContainer>
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
  buttonText: {
    color: colors.White,
    fontSize: 16,
    textAlign: "center",
  },
});
