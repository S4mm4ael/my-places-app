import { TextInput, Button, StyleSheet } from "react-native";

function GoalInput() {
  return (
    <>
      <TextInput
        placeholder="Your goal"
        style={styles.textInput}
        value={goalText}
        onChangeText={inputHandler}
      />
      <Button title="Add" onPress={inputButtonHandler} />
    </>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
  },
});
