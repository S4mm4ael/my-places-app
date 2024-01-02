import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  SafeAreaView,
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
    <SafeAreaView>
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your goal"
            style={styles.textInput}
            value={text}
            onChangeText={inputHandler}
          />
          <Button title="Add" onPress={inputButtonHandler} />
        </View>
        <View>
          <ScrollView style={styles.goalsContainer}>
            {goals.map((goal, index) => (
              <View key={index} style={styles.goalItem}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 10,
    flexDirection: "column",
    gap: 10,
  },
  inputContainer: {
    height: 50,
    flexDirection: "row",
    paddingBottom: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  goalsContainer: {},
  textInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
  },
  goalItem: {
    marginBottom: 8,
    borderRadius: 6,
    padding: 12,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
  },
});
