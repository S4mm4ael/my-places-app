import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your goal" style={styles.textInput} />
        <Button title="Add goal" />
      </View>
      <View>
        <Text>List of goals</Text>
      </View>
      <Image source={require("./assets/icon.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 40,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
  },
});
