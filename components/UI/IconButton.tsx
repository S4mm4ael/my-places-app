import React from "react";
import {TouchableOpacity, StyleSheet, ViewStyle} from "react-native";
import {Ionicons} from "@expo/vector-icons";

interface IconButtonProps {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  onPress: () => void;
  style?: ViewStyle;
}

export const IconButton: React.FC<IconButtonProps> = ({
  name,
  size = 24,
  color = "black",
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
