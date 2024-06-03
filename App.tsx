import React from "react";
import {StatusBar} from "expo-status-bar";
import {RootNavigator} from "./app/navigators";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <RootNavigator />
    </>
  );
}
