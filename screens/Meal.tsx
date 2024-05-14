import {Text, StyleSheet, Image, ScrollView} from "react-native";
import React, {useLayoutEffect} from "react";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {StackParamList} from "../App";
import {MEALS} from "../data/data";
import MealDetails from "../components/MealDetails";
import MealDetailsList from "../components/MealDetailsList";

type MealRouteProp = RouteProp<StackParamList, "Meal">;

const Meal = () => {
  const route = useRoute<MealRouteProp>();
  const navigation = useNavigation();
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({title: meal?.title});
  }, [mealId, navigation]);

  return meal ? (
    <ScrollView>
      <Image source={{uri: meal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>Meal details</Text>
      <MealDetails meal={meal} />
      <MealDetailsList
        name="Ingredients"
        list={meal.ingredients}
        listStyle="marked"
      />
      <MealDetailsList name="Steps" list={meal.steps} listStyle="numbered" />
    </ScrollView>
  ) : (
    <Text>Meal is't found...</Text>
  );
};

export default Meal;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 4,
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
});
