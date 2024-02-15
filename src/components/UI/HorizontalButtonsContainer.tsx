import React from "react";
import { View, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";

interface HorizontalButtonsContainerProps {
  children: React.ReactNode;
}
function HorizontalButtonsContainer({ children }: HorizontalButtonsContainerProps) {
  return <View style={styles.buttonsContainer}>{children}</View>;
}

export default HorizontalButtonsContainer;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
});
