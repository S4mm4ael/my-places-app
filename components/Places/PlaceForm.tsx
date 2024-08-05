import {useState} from "react";
import {ScrollView, TextInput, View, Text, StyleSheet} from "react-native";
import {ImagePicker} from "./ImagePicker";

export function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  function changeTitleHandler(enteredTitle: string) {
    setEnteredTitle(enteredTitle);
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          placeholder="Enter place title"
        />
        <Text style={styles.label}>Picture</Text>
        <ImagePicker />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});
