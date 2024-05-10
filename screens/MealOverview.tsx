import React from "react";
import {MEALS} from "../data/data";
import {View, Text, StyleSheet} from "react-native";
import {RouteProp, useRoute} from "@react-navigation/native";
import {StackParamList} from "../App";

type ProfileScreenRouteProp = RouteProp<StackParamList, "MealOverview">;

function MealOverview() {
  const route = useRoute<ProfileScreenRouteProp>();
  const categoryId = route.params.id;

  return (
    <View style={styles.container}>
      <Text>Meals Overview screen - ${categoryId}</Text>
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
