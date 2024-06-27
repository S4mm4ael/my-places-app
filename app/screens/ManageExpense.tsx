import {View, Text} from "react-native";
import React from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {IconButton} from "../components/UI/IconButton";
import {Colors} from "../constants";

export const ManageExpense = () => {
  const route = useRoute();
  const {setOptions} = useNavigation();

  const id = (route.params as {id?: string})?.id;
  const isEdit = id !== undefined;

  React.useEffect(() => {
    setOptions({
      title: isEdit ? `Edit Expense ${id}` : "Add Expense",
    });
  }, [isEdit, setOptions]);

  return (
    <View>
      {isEdit ? (
        <IconButton icon="trash" color="red" onPress={() => {}} />
      ) : null}
    </View>
  );
};
