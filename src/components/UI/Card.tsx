import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../global/constatnts";

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    height: 150,
    backgroundColor: colors.PrimeRed,
    alignItems: "center",
    marginTop: 64,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    //Android specific:
    elevation: 4,
    //IOs
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
