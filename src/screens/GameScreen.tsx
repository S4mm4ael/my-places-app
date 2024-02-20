import { useWindowDimensions, View, StyleSheet, Alert, Text, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { generateRandomNumberBetween } from "../utils/helpers/generateRandomNumber";
import { useState, useEffect } from "react";
import { Title } from "../components/UI/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import HorizontalButtonsContainer from "../components/UI/HorizontalButtonsContainer";
import InstructionText from "../components/UI/InstructionText";
import { colors } from "../global/constatnts";
import GuessNumberItem from "../components/game/GuessNumberItem";

interface GameScreenProps {
  userNumber: number;
  onGameOver: (numberOfRounds: number) => void;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }: GameScreenProps) {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);

  const [currentGuess, setCurrenGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  const guessRoundsListLenght = guessRounds.length;

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRounds((prev) => [newRndNumber, ...prev]);
  }

  let content = (
    <>
      <NumberContainer number={currentGuess} />
      <Card>
        <InstructionText text="Higher or lover" style={styles.instructionText} />
        <HorizontalButtonsContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={() => nextGuessHandler("lower")}
              childComponent={<Ionicons name="md-remove" size={32} color={colors.White} />}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={() => nextGuessHandler("higher")}
              childComponent={<Ionicons name="md-add" size={32} color={colors.White} />}
            />
          </View>
        </HorizontalButtonsContainer>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <Text style={styles.horizontalNumberContainer}>{currentGuess.toString()}</Text>
        <View style={styles.horizontalButtonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={() => nextGuessHandler("lower")}
              childComponent={<Ionicons name="md-remove" size={32} color={colors.White} />}
            />
          </View>
          <View style={styles.instructionTextHorizontal}>
            <InstructionText text="Higher or lover" />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={() => nextGuessHandler("higher")}
              childComponent={<Ionicons name="md-add" size={32} color={colors.White} />}
            />
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title text="Opponent Guess" />
      {content}
      <View style={styles.screen}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessNumberItem
              guess={itemData.item}
              roundNumber={guessRoundsListLenght - itemData.index}
            />
          )}
          keyExtractor={(item) => String(item)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  instructionText: {
    marginBottom: 30,
  },
  instructionTextHorizontal: {
    backgroundColor: colors.SecondaryRed,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    borderRadius: 40,
  },
  button: {
    alignItems: "center",
  },
  horizontalNumberContainer: {
    fontSize: 32,
    margin: 40,
    padding: 10,
    color: colors.White,
    borderWidth: 3,
    borderRadius: 40,
    borderColor: colors.White,
    textAlign: "center",
  },
  horizontalButtonsContainerWide: {
    flexDirection: "row",
  },
});
