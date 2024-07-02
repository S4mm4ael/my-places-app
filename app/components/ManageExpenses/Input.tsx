import {View, Text, TextInput, TextInputProps, StyleSheet} from "react-native";
import React from "react";

interface InputProps {
  label: string;
  textInputConfig?: TextInputProps;
}

export const Input = ({label, textInputConfig}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        {...textInputConfig}
        placeholderTextColor="#ccc"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    color: "#000",
  },
  label: {
    marginBottom: 4,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
  },
});
