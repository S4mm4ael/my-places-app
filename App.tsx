import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { useState } from "react";

import GoalItem, { IItemData } from "./components/GoalItem";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState<Array<{ text: string; id: string }>>([]);

  function inputHandler(text: string) {
    setGoalText(text);
  }

  function inputButtonHandler() {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
    setGoalText("");
  }

  const renderGoalItem = (itemData: ListRenderItemInfo<IItemData>) => (
    <GoalItem data={itemData} />
  );

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
          <FlatList<IItemData>
            data={goals}
            style={styles.goalsContainer}
            alwaysBounceVertical={false}
            renderItem={(goalItem) => renderGoalItem(goalItem)}
            keyExtractor={(item) => {
              return item.id;
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
});
