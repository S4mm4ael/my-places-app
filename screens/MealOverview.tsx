import React from "react";
import {MEALS} from "../data/data";
import {View, Text, StyleSheet} from "react-native";

function MealOverview() {
  return (
    <View style={styles.container}>
      <Text>Meals Overview screen</Text>
    </View>
  );
}

export default MealOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
