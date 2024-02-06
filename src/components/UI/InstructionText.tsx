import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../../global/constatnts";

interface InstructionTextProps {
  text: string;
}

function InstructionText({ text }: InstructionTextProps) {
  return <Text style={styles.instructionText}>{text}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 18,
    color: colors.PrimeYellow,
  },
});
