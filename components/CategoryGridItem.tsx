import {View, Text, Pressable, StyleSheet, Platform} from "react-native";
import React from "react";
import {stylesGlobal} from "../global/styles";

interface IProps {
  title: string;
  color: string;
  onPress: () => void;
}

const CategoryGridItem = ({title, color, onPress}: IProps) => {
  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{color: "ccc"}}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 10,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    ...stylesGlobal.itemShadow,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
