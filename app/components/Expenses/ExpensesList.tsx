import {FlatList, Text, ListRenderItem} from "react-native";
import React from "react";
import {Expense} from "../../constants";
import {ExpenseItem} from "./ExpenseItem";

interface Props {
  expenses: Expense[];
}

const expensePressHandler = () => {
  console.log(`Expense with pressed`);
};

const RenderExpenseItem: ListRenderItem<Expense> = ({item}) => {
  return <ExpenseItem {...item} onPress={expensePressHandler} />;
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
