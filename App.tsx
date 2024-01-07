import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState<Array<{ text: string; key: string }>>([]);

  function inputHandler(text: string) {
    setGoalText(text);
  }

  function inputButtonHandler() {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalText, key: Math.random().toString() },
    ]);
    setGoalText("");
  }

  return (
    <SafeAreaView>
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your goal"
            style={styles.textInput}
            value={goalText}
            onChangeText={inputHandler}
          />
          <Button title="Add" onPress={inputButtonHandler} />
        </View>
        <View>
          <FlatList
            data={goals}
            style={styles.goalsContainer}
            alwaysBounceVertical={false}
            renderItem={(itemData) => {
              return (
                <View key={itemData.item.key} style={styles.goalItem}>
                  <Text style={styles.goalText}>{itemData.item.text}</Text>
                </View>
              );
            }}
          ></FlatList>
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
    marginBottom: 12,
    borderRadius: 6,
    padding: 12,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
  },
});
