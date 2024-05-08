import {View, Text, Pressable} from "react-native";
import React from "react";

interface IProps {
  title: string;
  color: string;
}

const CategoryGridItem = ({title, color}: IProps) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridItem;
