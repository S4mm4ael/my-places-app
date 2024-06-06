import {View, Text, Pressable} from "react-native";
import React from "react";
import {Expense} from "../../constants";

export const ExpenseItem = ({description, amount, date}: Partial<Expense>) => {
  return (
    <Pressable>
      <View>
        <View>
          <Text>{description}</Text>
          <Text>{date?.toDateString()}</Text>
        </View>
        <View>
          <Text>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};
