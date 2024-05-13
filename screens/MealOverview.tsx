import React, {useLayoutEffect} from "react";
import {CATEGORIES, MEALS} from "../data/data";
import {
  View,
  FlatList,
  StyleSheet,
  ListRenderItemInfo,
  ListRenderItem,
} from "react-native";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {StackParamList} from "../App";
import MealItem from "../components/MealItem";
import Meal from "../models/meal";

type MealsOverviewRouteProp = RouteProp<StackParamList, "MealsOverview">;

function MealsOverview() {
  const route = useRoute<MealsOverviewRouteProp>();
  const navigation = useNavigation();
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderMealItem: ListRenderItem<Meal> = ({item}) => {
    return <MealItem data={item} />;
  };

  useLayoutEffect(() => {
    const categoryName = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({title: categoryName});
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
