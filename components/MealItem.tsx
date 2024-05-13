import {View, Text} from "react-native";
import React from "react";
import Meal from "../models/meal";

interface IProps {
  data: Meal;
}

const MealItem = ({data}: IProps) => {
  return (
    <View>
      <Text>{data.title}</Text>
    </View>
  );
};

export default MealItem;
