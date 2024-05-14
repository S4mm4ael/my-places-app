import {View, Text, StyleSheet} from "react-native";
import React from "react";
import {stylesGlobal} from "../../global/styles";

interface IProps {
  children: React.ReactNode;
  color?: string;
}

export const Subtitle = ({children, color}: IProps) => {
  return (
    <View
      style={[styles.subtitleContainer, {backgroundColor: color ?? "#000"}]}
    >
      <Text style={styles.subtitleText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleContainer: {
    margin: 4,
    borderRadius: 8,
    paddingLeft: 4,
    height: 32,
    flex: 1,
    justifyContent: "center",
    ...stylesGlobal.itemShadow,
  },
  subtitleText: {
    fontSize: 20,
  },
});
