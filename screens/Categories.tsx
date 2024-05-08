import {FlatList, ListRenderItemInfo, View, Text} from "react-native";
import React from "react";
import {CATEGORIES} from "../data/data";
import Category from "../models/category";
import CategoryGridItem from "../components/CategoryGridItem";

function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
  return (
    <CategoryGridItem color={itemData.item.color} title={itemData.item.title} />
  );
}

const Categories = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => renderCategoryItem(item)}
      numColumns={2}
    />
  );
};

export default Categories;
