import {View, Text, StyleSheet} from "react-native";
import React from "react";
import {Subtitle} from "./UI";

interface IProps {
  name: string;
  list: string[];
  listStyle: "marked" | "numbered";
}

const MealDetailsList = ({name, list, listStyle}: IProps) => {
  return (
    <View style={styles.listContainer}>
      <Subtitle>{name}</Subtitle>
      {list.map((item, index) => (
        <View key={index} style={{flexDirection: "row"}}>
          <Text style={{fontWeight: "bold"}}>
            {listStyle === "marked" ? "‧" : index + 1}
          </Text>
          <Text> {item}</Text>
        </View>
      ))}
    </View>
  );
};

export default MealDetailsList;

const styles = StyleSheet.create({
  detailsItem: {
    margin: 4,
    fontSize: 12,
  },
  listContainer: {
    paddingHorizontal: 4,
  },
});
