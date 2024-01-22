import { StyleSheet, View, SafeAreaView, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import GoalInput from "./components/GoalInput";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView>
        <View style={styles.appContainer}></View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    gap: 10,
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
});
