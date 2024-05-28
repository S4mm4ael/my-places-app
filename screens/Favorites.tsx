import {View, Text, StyleSheet} from "react-native";
import React, {useContext, useMemo, useState} from "react";
import {FavoritesContext} from "../store/context/favorites-context";
import {MealsList} from "../components/MealsList/MealsList";
import {MEALS} from "../data/data";

export const Favorites = () => {
  const {ids} = useContext(FavoritesContext);

  const displayedMeals = MEALS.filter((meal) => ids.includes(meal.id));

  return (
    <View style={styles.container}>
      {displayedMeals.length > 0 ? (
        <MealsList meals={displayedMeals} />
      ) : (
        <View style={styles.placeholderContainer}>
          <Text>You have no favorite meals by now</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  placeholderContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
