import {View, Text, StyleSheet} from "react-native";
import React from "react";

interface IProps {
  children: React.ReactNode;
  color?: string;
}

export const Subtitle = ({children, color}: IProps) => {
  return (
    <View>
      <Text
        style={[styles.subtitleContainer, {borderBottomColor: color ?? "#000"}]}
      >
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleContainer: {
    fontWeight: "bold",
    fontSize: 20,
    borderBottomWidth: 2,
  },
});
