import {View, Text, TextInput, TextInputProps, StyleSheet} from "react-native";
import React from "react";
import {Colors} from "@/app/constants";

interface InputProps {
  label: string;
  textInputConfig?: TextInputProps;
  invalid: boolean;
}

export const Input = ({label, textInputConfig, invalid}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          label === "Description" && {height: 80},
          invalid && styles.invalidInput,
        ]}
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
    flex: 1,
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
  invalidLabel: {
    color: Colors.red,
  },
  invalidInput: {
    color: Colors.lightRed,
  },
});
