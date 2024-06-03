import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AllExpenses, ManageExpenses, RecentExpenses} from "../screens";
import {NavigationContainer} from "@react-navigation/native";
import {ExpensesOverview} from "./ExpensesOverview";

const RootStackNavigator = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator>
        <RootStackNavigator.Screen
          name="ExpencsesOverview"
          component={ExpensesOverview}
        />
        <RootStackNavigator.Screen
          name="ManageExpenses"
          component={ManageExpenses}
        />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
};
