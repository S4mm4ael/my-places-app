import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState<Array<string>>([]);

  function inputHandler(text: string) {
    setText(text);
  }

  function inputButtonHandler() {
    setGoals((currentGoals) => [...currentGoals, text]);
    setText("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your goal"
          style={styles.textInput}
          value={text}
          onChangeText={inputHandler}
        />
        <Button title="Add goal" onPress={inputButtonHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 40,
    flex: 1,
    gap: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  goalsContainer: {
    flexDirection: "column",
    gap: 10,
  },
  textInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
  },
  goalItem: {
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
  },
});
