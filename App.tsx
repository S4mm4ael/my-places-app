import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
