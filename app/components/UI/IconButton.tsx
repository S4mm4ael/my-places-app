import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "../../constants";

type IconName = keyof (typeof Ionicons)["glyphMap"];

interface IconButtonProps {
  icon: IconName;
  onPress: () => void;
  size: number;
  color: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  size,
  color,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name={icon} size={size ?? 24} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.background,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
