import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {Pressable, StyleSheet} from "react-native";

interface IProps {
  icon: any;
  color: string;
  onPress: () => void;
}

export const IconButton = ({icon, color, onPress}: IProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
