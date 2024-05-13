import {View, Text} from "react-native";
import React, {useLayoutEffect} from "react";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {StackParamList} from "../App";
import {MEALS} from "../data/data";

type MealRouteProp = RouteProp<StackParamList, "Meal">;

const Meal = () => {
  const route = useRoute<MealRouteProp>();
  const navigation = useNavigation();
  const mealId = route.params.mealId;

  useLayoutEffect(() => {
    const mealName = MEALS.find((meal) => meal.id === mealId)?.title;

    navigation.setOptions({title: mealName});
  }, [mealId, navigation]);

  return (
    <View>
      <Text>MealItem = {mealId}</Text>
    </View>
  );
};

export default Meal;
