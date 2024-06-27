import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AllExpenses, ManageExpense, RecentExpenses} from "../screens";
import {NavigationContainer, NavigationProp} from "@react-navigation/native";
import {ExpensesOverview} from "./ExpensesOverview";
import {Colors} from "../constants";

export type RootStackParamList = {
  ManageExpense: {id: string | undefined};
  ExpensesOverview: undefined;
};

export type RootNavigationProps = NavigationProp<RootStackParamList>;

const RootStackNavigator = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <RootStackNavigator.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.header,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22,
          },
        }}
      >
        <RootStackNavigator.Screen
          name="ExpensesOverview"
          component={ExpensesOverview}
          options={{headerShown: false}}
        />
        <RootStackNavigator.Screen
          name="ManageExpense"
          component={ManageExpense}
          options={{
            title: "Manage Expense",
            presentation: "modal",
          }}
        />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
};
