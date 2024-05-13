import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import React, {useLayoutEffect} from "react";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {StackParamList} from "../App";
import {MEALS} from "../data/data";
import MealDetails from "../components/MealDetails";

type MealRouteProp = RouteProp<StackParamList, "Meal">;

const renderList = (
  name: string,
  list: string[],
  listStyle: "marked" | "numbered"
) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.subTitle}>{name}</Text>
      {list.map((item, index) => (
        <View key={index} style={{flexDirection: "row"}}>
          <Text style={{fontWeight: "bold"}}>
            {listStyle === "marked" ? "‧" : index + 1}
          </Text>
          <Text> {item}</Text>
        </View>
      ))}
    </View>
  );
};

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
      {renderList("Ingredients ", meal.ingredients, "marked")}
      {renderList("Steps ", meal.steps, "numbered")}
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
  detailsItem: {
    margin: 4,
    fontSize: 12,
  },
  listContainer: {
    paddingHorizontal: 4,
  },
});
