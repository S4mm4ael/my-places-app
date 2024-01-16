import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { useState } from "react";

import GoalItem, { IItemData } from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState<Array<{ text: string; id: string }>>([]);

  function inputButtonHandler(enteredText: string) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }

  function handleGoalDelete() {}

  const renderGoalItem = (data: IItemData) => (
    <GoalItem data={data} deleteItem={handleGoalDelete} />
  );

  return (
    <SafeAreaView>
      <View style={styles.appContainer}>
        <GoalInput onAdd={inputButtonHandler} />
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
