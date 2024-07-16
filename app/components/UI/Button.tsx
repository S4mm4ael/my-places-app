import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import {Colors} from "../../constants/Colors";

interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({title, onPress, color}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color ?? Colors.blue}]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.blue,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
