import {View, Text, StyleSheet} from "react-native";
import React from "react";
import {Subtitle} from "./UI";

interface IProps {
  name: string;
  list: string[];
  listStyle: "marked" | "numbered";
  color: string;
}

const MealDetailsList = ({name, list, listStyle, color}: IProps) => {
  return (
    <View style={styles.listContainer}>
      <Subtitle color={color}>{name}</Subtitle>
      {list.map((item, index) => (
        <View key={index} style={styles.detailsItem}>
          <Text style={styles.detailsItemMark}>
            {listStyle === "marked" ? "‧" : index + 1}
          </Text>
          <Text style={styles.detailsItemText}> {item}</Text>
        </View>
      ))}
    </View>
  );
};

export default MealDetailsList;

const styles = StyleSheet.create({
  detailsItem: {
    margin: 4,
    marginLeft: 8,
    flexDirection: "row",
  },
  detailsItemText: {
    fontSize: 14,
  },
  detailsItemMark: {
    fontSize: 14,
    fontWeight: "bold",
  },
  listContainer: {
    paddingHorizontal: 4,
  },
});
