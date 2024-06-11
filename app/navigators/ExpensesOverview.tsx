import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {AllExpenses, RecentExpenses} from "../screens";
import {Colors} from "../constants";
import {Ionicons} from "@expo/vector-icons";
import {IconButton} from "../components/UI/IconButton";

const BottomTabNavigator = createBottomTabNavigator();

export const ExpensesOverview = () => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.header,
        },
        headerTintColor: Colors.tint,
        tabBarStyle: {backgroundColor: Colors.header},
        tabBarActiveTintColor: Colors.tabIconSelected,
        headerRight: () => (
          <IconButton
            icon="add"
            size={24}
            color={Colors.tint}
            onPress={() => {
              console.log("Add Expense");
            }}
          />
        ),
      }}
    >
      <BottomTabNavigator.Screen
        name="RecentExpences"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({size, color}) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({size, color}) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};
