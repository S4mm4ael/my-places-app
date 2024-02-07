import { Text, View, StyleSheet, Alert, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { generateRandomNumberBetween } from "../utils/helpers/generateRandomNumber";
import { useState, useEffect, useMemo } from "react";
import { Title } from "../components/UI/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import HorizontalButtonsContainer from "../components/UI/HorizontalButtonsContainer";
import InstructionText from "../components/UI/InstructionText";
import { colors } from "../global/constatnts";

interface GameScreenProps {
  userNumber: number;
  onGameOver: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }: GameScreenProps) {
  const initialGuess = useMemo(() => generateRandomNumberBetween(1, 100, userNumber), [userNumber]);

  const [currentGuess, setCurrenGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction: string) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie!", "You know that it is wrong!", [{ text: "Sorry!", style: "cancel" }]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomNumberBetween(minBoundary, maxBoundary, currentGuess);
    setCurrenGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title text="Opponent Guess" />
      <NumberContainer number={currentGuess} />
      <Card>
        <InstructionText text="Higher or lover" style={styles.instructionText} />
        <HorizontalButtonsContainer>
          <View style={styles.buttonContainer}>
            <Pressable onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color={colors.White} />
            </Pressable>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="md-add" size={24} color={colors.White} />
            </Pressable>
          </View>
        </HorizontalButtonsContainer>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 10,
  },
});
