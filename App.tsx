import React from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import Categories from "./screens/Categories";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Categories />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 30,
  },
});
