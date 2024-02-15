import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Title } from "../components/UI/Title";
import { colors } from "../global/constatnts";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title text="GAME OVER" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/gameOverBackgroundImage.jpg")}
        />
      </View>
      <Text style={styles.text}>Your phone needed X rounds to guess the number Y</Text>
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
  },
});
