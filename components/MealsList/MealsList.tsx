import {View, Text, ListRenderItem, FlatList, StyleSheet} from "react-native";
import React from "react";
import type Meal from "../../models/meal";
import MealItem from "./MealItem";

export const MealsList = ({meals}: {meals: Meal[]}) => {
  const renderMealItem: ListRenderItem<Meal> = ({item}) => {
    return <MealItem data={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
