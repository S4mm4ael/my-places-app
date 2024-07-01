import {View, Text, TextInput, TextInputProps} from "react-native";
import React from "react";

interface InputProps {
  label: string;
  textInputConfig: TextInputProps;
}

const Imput = ({label, textInputConfig}: InputProps) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
};

export default Imput;
