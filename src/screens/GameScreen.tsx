import { Text, View, StyleSheet } from "react-native";
import { generateRandomNumberBetween } from "../utils/helpers/generateRandomNumber";
import { useEffect, useState } from "react";
import { Title } from "../components/UI/Title";
import { NumberContainer } from "../components/game/NumberContainer";

interface GameScreenProps {
  userNumber: number;
}

export default function GameScreen({ userNumber }: GameScreenProps) {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrenGuess] = useState();

  return (
    <View style={styles.screen}>
      <Title text="Opponent Guess" />
      <NumberContainer number={userNumber} />
      <View>
        <Text>Higher or lower</Text>
        <Text>+-</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: 100,
    padding: 16,
  },
});
