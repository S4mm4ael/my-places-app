import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../global/constatnts";

interface GuessNumberItem {
  roundNumber: number;
  guess: number;
}

function GuessNumberItem({ roundNumber, guess }: GuessNumberItem) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessNumberItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: colors.SecondaryRed,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: colors.SecondaryRed,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontWeight: "700",
    color: colors.White,
  },
});
