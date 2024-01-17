import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
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
            <Button title="Add" onPress={addGoal} color={"#8fce00"} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color={"#E53D00"} />
          </View>
        </View>
      </View>
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
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    paddingHorizontal: 16,
    paddingBottom: 10,
    backgroundColor: "#8e7cc3",
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#b4a7d6",
    color: "#ffffff",
    marginRight: 8,
    padding: 16,
    borderRadius: 6,
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
