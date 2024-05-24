import React from "react";
import {StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Categories, Favorites, Meal, MealsOverview} from "./screens";

import {createDrawerNavigator} from "@react-navigation/drawer";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";

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
    <Drawer.Navigator
      screenOptions={{
        drawerContentStyle: {
          backgroundColor: "#fee",
        },
        drawerInactiveTintColor: "#ddd",
      }}
    >
      <Drawer.Screen
        name="All Categories"
        component={Categories}
        options={{
          drawerIcon: ({color, size}) => (
            <MIcon
              name="clipboard-list"
              color={color ?? "#000"}
              size={size ?? 20}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          drawerIcon: ({color, size}) => (
            <MIcon name="heart-box" color={color ?? "#000"} size={size ?? 20} />
          ),
        }}
      />
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
            name="Drawer"
            component={DrawerNavigator}
            options={{headerShown: false}}
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
              title: "About the Meal",
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
