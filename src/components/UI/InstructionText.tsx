import React from "react";
import { Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { colors } from "../../global/constatnts";

interface InstructionTextProps {
  text: string;
  style?: StyleProp<ViewStyle>;
}

function InstructionText({ text, style }: InstructionTextProps) {
  return <Text style={[styles.instructionText, style]}>{text}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: colors.PrimeYellow,
  },
});
