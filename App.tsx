import { StyleSheet, View, SafeAreaView } from "react-native";

import { StatusBar } from "expo-status-bar";

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
