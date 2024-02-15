import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Title } from "../components/UI/Title";
import { colors } from "../global/constatnts";
import PrimaryButton from "../components/UI/PrimaryButton";

interface GameOverScreenProps {
  roundsNumber: string;
  userNumber: number;
  onStartNewGame: () => void;
}

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }: GameOverScreenProps) {
  return (
    <View style={styles.rootContainer}>
      <Title text="GAME OVER" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/gameOverBackgroundImage.jpg")}
        />
      </View>
      <Text style={styles.text}>
        Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton buttonText="Start New Game" onPress={() => onStartNewGame()} />
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: colors.PrimeYellow,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 16,
    marginVertical: 16,
  },
  highlightText: {
    fontWeight: "800",
  },
});
