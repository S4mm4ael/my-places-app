import React from "react";
import { Text, View, Image, StyleSheet, Dimensions, useWindowDimensions } from "react-native";
import { Title } from "../components/UI/Title";
import { colors } from "../global/constatnts";
import PrimaryButton from "../components/UI/PrimaryButton";

interface GameOverScreenProps {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }: GameOverScreenProps) {
  const { width, height } = useWindowDimensions();

  console.log(width, "  ", height);

  let imageSize = 300;

  if (width < 300) {
    imageSize = 150;
  }

  if (height < 450) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  console.log(imageStyle);
  return (
    <View style={styles.rootContainer}>
      <Title text="GAME OVER" />
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/gameOverBackgroundImage.jpg")}
        />
      </View>
      <Text style={styles.text}>
        Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton
        childComponent={<Text style={styles.primaryButtonText}>Start New Game</Text>}
        onPress={() => onStartNewGame()}
      />
    </View>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    width: 10,
    height: 10,
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
  primaryButtonText: {
    color: colors.White,
    textAlign: "center",
  },
});
