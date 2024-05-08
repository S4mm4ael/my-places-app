import React from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import Categories from "./screens/Categories";
import {StatusBar} from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor="white" />
      <Categories />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 30,
  },
});
