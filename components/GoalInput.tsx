import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  SafeAreaView,
  Image,
} from "react-native";

interface GoalInputProps {
  isVisible: boolean;
  onAdd: (enteredText: string) => void;
  onCancel: () => void;
}

function GoalInput({ isVisible, onAdd, onCancel }: GoalInputProps) {
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
      <SafeAreaView style={styles.goalInputSafeContainer}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/target.png")}
            style={styles.image}
          />
          <TextInput
            placeholder="Your goal"
            style={styles.textInput}
            value={goalText}
            onChangeText={inputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add" onPress={addGoal} />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={onCancel} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  goalInputSafeContainer: {
    flex: 1,
    justifyContent: "center",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
  },
  image: {
    margin: 20,
    width: 100,
    height: 100,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "space-around",
  },
  button: {
    marginHorizontal: 8,
    width: "40%",
  },
});
