import {FlatList, Text, ListRenderItem} from "react-native";
import React from "react";
import {Expense} from "../../constants";
import {ExpenseItem} from "./ExpenseItem";

interface Props {
  expenses: Expense[];
}

const RenderExpenseItem: ListRenderItem<Expense> = ({item}) => {
  return <ExpenseItem {...item} />;
};

export const ExpensesList = ({expenses}: Props) => {
  return (
    <FlatList
      data={expenses}
      renderItem={RenderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};
