import React from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import Categories from "./screens/Categories";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealOverview from "./screens/MealOverview";

const Stack = createNativeStackNavigator();

export type StackParamList = {
  MealOverview: {id: string};
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={Categories} />
          <Stack.Screen name="MealOverview" component={MealOverview} />
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
