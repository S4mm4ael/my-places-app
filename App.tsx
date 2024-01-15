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
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState<Array<{ text: string; id: string }>>([]);

  function inputButtonHandler(enteredText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    setGoalText("");
  }

  const renderGoalItem = (data: IItemData) => <GoalItem data={data} />;

  return (
    <SafeAreaView>
      <View style={styles.appContainer}>
        <GoalInput
          onInput={inputHandler}
          onAdd={inputButtonHandler}
          text={goalText}
        />
        <View>
          <FlatList<IItemData>
            data={goals}
            style={styles.goalsContainer}
            alwaysBounceVertical={false}
            renderItem={(goalItem) => renderGoalItem(goalItem.item)}
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
  goalsContainer: {},
});
