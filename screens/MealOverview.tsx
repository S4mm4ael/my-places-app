import React, {useLayoutEffect} from "react";
import {CATEGORIES, MEALS} from "../data/data";
import {View, StyleSheet} from "react-native";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {StackParamList} from "../App";
import {MealsList} from "../components/MealsList/MealsList";

type MealsOverviewRouteProp = RouteProp<StackParamList, "MealsOverview">;

export function MealsOverview() {
  const route = useRoute<MealsOverviewRouteProp>();
  const navigation = useNavigation();
  const categoryId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryName = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({title: categoryName});
  }, [categoryId, navigation]);

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <View style={styles.container}>
      <MealsList meals={displayedMeals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
