import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import { colors } from "../../global/constatnts";

interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.White,
    textAlign: "center",
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 0,
    borderRadius: 8,
    borderColor: colors.White,
    padding: 8,
    marginBottom: 8,
    maxWidth: "90%",
  },
});
