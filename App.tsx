import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          margin: 10,
          borderWidth: 2,
          borderColor: "blue",
          padding: 16,
          borderRadius: 10,
        }}
      >
        Hello
      </Text>
      <Text style={styles.text}>Hello</Text>
      <Button title="Click me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 10,
    borderWidth: 2,
    borderColor: "green",
    padding: 16,
    borderRadius: 5,
  },
});
