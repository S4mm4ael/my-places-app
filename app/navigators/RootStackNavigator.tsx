import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AllExpenses, ManageExpense, RecentExpenses} from "../screens";
import {NavigationContainer} from "@react-navigation/native";
import {ExpensesOverview} from "./ExpensesOverview";

const RootStackNavigator = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <RootStackNavigator.Navigator>
        <RootStackNavigator.Screen
          name="ExpencsesOverview"
          component={ExpensesOverview}
          options={{headerShown: false}}
        />
        <RootStackNavigator.Screen
          name="ManageExpense"
          component={ManageExpense}
        />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
};
