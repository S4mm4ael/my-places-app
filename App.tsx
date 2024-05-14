import React from "react";
import {Button, StyleSheet, Text} from "react-native";
import Categories from "./screens/Categories";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealOverview";
import Meal from "./screens/Meal";

const Stack = createNativeStackNavigator();

type MealsOverviewParams = {
  categoryId: string;
};

type MealParams = {
  mealId: string;
};

export type StackParamList = {
  MealsOverview: MealsOverviewParams;
  Meal: MealParams;
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealsCategories"
            component={Categories}
            options={{title: "All Categories", headerTitleAlign: "center"}}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverview}
            options={{headerTitleAlign: "center"}}
            //TODO remove from PR
            // options={({route, navigation}) => {
            //   const {categoryId} = route.params as MealsOverviewParams;
            //   return {
            //     title: categoryId,
            //   };
            // }}
          />
          <Stack.Screen
            name="Meal"
            component={Meal}
            options={{
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 30,
  },
});
