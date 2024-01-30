import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
  }

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["#ff84c1", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/appBackground.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
