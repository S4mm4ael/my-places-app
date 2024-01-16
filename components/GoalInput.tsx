import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

interface GoalInputProps {
  onAdd: (enteredText: string) => void;
}

function GoalInput(props: GoalInputProps) {
  const [goalText, setGoalText] = useState("");

  function inputHandler(text: string) {
    setGoalText(text);
  }

  function addGoal() {
    props.onAdd(goalText);
    setGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your goal"
        style={styles.textInput}
        value={goalText}
        onChangeText={inputHandler}
      />
      <Button title="Add" onPress={addGoal} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    flexDirection: "row",
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
