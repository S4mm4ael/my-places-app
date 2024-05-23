import {FlatList, ListRenderItemInfo} from "react-native";
import React from "react";
import {CATEGORIES} from "../data/data";
import Category from "../models/category";
import CategoryGridItem from "../components/CategoryGridItem";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackParamList} from "../App";
import {useNavigation} from "@react-navigation/native";

function renderCategoryItem(
  itemData: ListRenderItemInfo<Category>,
  navigation: NativeStackNavigationProp<StackParamList, "MealsOverview">
) {
  const pressHandler = () => {
    navigation.navigate("MealsOverview", {
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

export const Categories = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, "MealsOverview">>();

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => renderCategoryItem(item, navigation)}
      numColumns={2}
    />
  );
};
