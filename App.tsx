import React from "react";
import {StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Categories, Favorites, Meal, MealsOverview} from "./screens";

import {createDrawerNavigator} from "@react-navigation/drawer";

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

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={Categories} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{title: "All Categories", headerTitleAlign: "center"}}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverview}
            options={{headerTitleAlign: "center"}}
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
