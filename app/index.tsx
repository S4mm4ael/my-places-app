import React from "react";
import {RootNavigator} from "./navigators";
import {StatusBar} from "expo-status-bar";
import {ExpensesContextProvider} from "./stores/expenses-context";
import {Platform} from "react-native";

const index = () => {
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <RootNavigator />
      </ExpensesContextProvider>
    </>
  );
};

export default index;
