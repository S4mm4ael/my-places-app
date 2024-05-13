import {View, Text, Pressable, Image, StyleSheet, Platform} from "react-native";
import React from "react";
import Meal from "../models/meal";
import {stylesGlobal} from "../global/styles";

interface IProps {
  data: Meal;
}

const MealItem = ({data}: IProps) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{color: "ccc"}}
        onPress={() => null}
      >
        <View>
          <Image source={{uri: data.imageUrl}} style={styles.image} />
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailsItem}>{data.duration} min</Text>
          <Text style={styles.detailsItem}>
            {data.complexity.toUpperCase()}
          </Text>
          <Text style={styles.detailsItem}>
            {data.affordability.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 12,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    ...stylesGlobal.itemShadow,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 4,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    margin: 4,
    fontSize: 12,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
