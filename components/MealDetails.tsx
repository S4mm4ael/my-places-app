import {View, Text, StyleSheet} from "react-native";
import React from "react";
import Meal from "../models/meal";

interface IProps {
  meal: Meal;
}

const MealDetails = ({meal}: IProps) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailsItem}>{meal.duration} min</Text>
      <Text style={styles.detailsItem}>{meal.complexity.toUpperCase()}</Text>
      <Text style={styles.detailsItem}>{meal.affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 4,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    margin: 4,
    fontSize: 12,
  },
});
