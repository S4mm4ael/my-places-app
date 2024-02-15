import React from "react";
import { View, Text } from "react-native";

interface GuessNumberItem {
  roundNumber: number;
  guess: number;
}

function GuessNumberItem({ roundNumber, guess }: GuessNumberItem) {
  return (
    <View>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessNumberItem;
