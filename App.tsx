import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

import { colors } from "./src/global/constatnts";
import GameScreen from "./src/screens/GameScreen";
import StartGameScreen from "./src/screens/StartGameScreen";

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
    <LinearGradient
      colors={[colors.GradientPink, colors.GradientYellow]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./src/assets/images/appBackground.jpg")}
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
