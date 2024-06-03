import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {AllExpenses, RecentExpenses} from "../screens";

const BottomTabNavigator = createBottomTabNavigator();

export const ExpensesOverview = () => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name="RecentExpences"
        component={RecentExpenses}
      />
      <BottomTabNavigator.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTabNavigator.Navigator>
  );
};
