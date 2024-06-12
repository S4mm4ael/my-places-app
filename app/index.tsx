import {View, Text} from "react-native";
import React from "react";
import {RootNavigator} from "./navigators";
import {StatusBar} from "expo-status-bar";

const index = () => {
  return (
    <>
      <StatusBar style="dark" />
      <RootNavigator />
    </>
  );
};

export default index;
