import {Text, StyleSheet, Image, ScrollView, View, Button} from "react-native";
import React, {useLayoutEffect} from "react";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {StackParamList} from "../App";
import {CATEGORIES, MEALS} from "../data/data";
import MealDetails from "../components/MealDetails";
import MealDetailsList from "../components/MealDetailsList";
import {IconButton} from "../components/UI";

type MealRouteProp = RouteProp<StackParamList, "Meal">;

const Meal = () => {
  const route = useRoute<MealRouteProp>();
  const navigation = useNavigation();
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  const categoryColor =
    CATEGORIES.find((category) => category.id === meal?.categoryIds[0])
      ?.color ?? "#000";

  const handleHeaderButtonPress = () => {
    console.log("clicked");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal?.title,
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="#000"
            onPress={handleHeaderButtonPress}
          />
        );
      },
    });
  }, [mealId, navigation, handleHeaderButtonPress]);

  return meal ? (
    <ScrollView>
      <Image source={{uri: meal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>Meal details</Text>
      <MealDetails meal={meal} />
      <MealDetailsList
        name="Ingredients"
        list={meal.ingredients}
        listStyle="marked"
        color={categoryColor}
      />
      <MealDetailsList
        name="Steps"
        list={meal.steps}
        listStyle="numbered"
        color={categoryColor}
      />
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
