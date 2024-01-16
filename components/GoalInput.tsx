import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  SafeAreaView,
} from "react-native";

interface GoalInputProps {
  isVisible: boolean;
  onAdd: (enteredText: string) => void;
}

function GoalInput({ isVisible, onAdd }: GoalInputProps) {
  const [goalText, setGoalText] = useState("");

  function inputHandler(text: string) {
    setGoalText(text);
  }

  function addGoal() {
    onAdd(goalText);
    setGoalText("");
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your goal"
            style={styles.textInput}
            value={goalText}
            onChangeText={inputHandler}
          />
          <Button title="Add" onPress={addGoal} />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  textInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
  },
});
