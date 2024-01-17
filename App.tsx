import { StyleSheet, View, SafeAreaView, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import GoalItem, { IItemData } from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [goals, setGoals] = useState<Array<{ text: string; id: string }>>([]);

  function startAddGoalHandling() {
    setShowModal(true);
  }

  function endAddGoalHandling() {
    setShowModal(false);
  }

  function inputButtonHandler(enteredText: string) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    endAddGoalHandling();
  }

  function handleGoalDelete(id: string) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  const renderGoalItem = (data: IItemData) => (
    <GoalItem data={data} deleteItem={handleGoalDelete} />
  );

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView>
        <View style={styles.appContainer}>
          <Button
            title="Add new goal"
            color={"#5e0acc"}
            onPress={startAddGoalHandling}
          />
          <GoalInput
            isVisible={showModal}
            onAdd={inputButtonHandler}
            onCancel={endAddGoalHandling}
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    gap: 10,
    paddingHorizontal: 10,
  },
  goalsContainer: {},
});
