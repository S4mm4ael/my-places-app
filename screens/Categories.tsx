import {FlatList, ListRenderItemInfo} from "react-native";
import React from "react";
import {CATEGORIES} from "../data/data";
import Category from "../models/category";
import CategoryGridItem from "../components/CategoryGridItem";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackParamList} from "../App";

interface IProps {
  navigation: NativeStackNavigationProp<StackParamList, "MealOverview">;
}

function renderCategoryItem(
  itemData: ListRenderItemInfo<Category>,
  navigation: any
) {
  const pressHandler = () => {
    navigation.navigate("MealOverview", {
      categoryId: itemData.item.id,
    });
  };

  return (
    <CategoryGridItem
      color={itemData.item.color}
      title={itemData.item.title}
      onPress={pressHandler}
    />
  );
}

const Categories = ({navigation}: IProps) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => renderCategoryItem(item, navigation)}
      numColumns={2}
    />
  );
};

export default Categories;
