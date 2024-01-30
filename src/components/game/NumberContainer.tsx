import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../global/constatnts";

interface NumberContainerProps {
  number: number;
}

export function NumberContainer({ number }: NumberContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.White,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.White,
    fontSize: 36,
    fontWeight: "bold",
  },
});
