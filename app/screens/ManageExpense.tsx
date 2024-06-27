import {View, StyleSheet} from "react-native";
import React from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {IconButton} from "../components/UI/IconButton";
import {Colors} from "../constants";
import Button from "../components/UI/Button";

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

  const deleteButtonHandler = () => {
    console.log("delete");
  };

  const cancelButtonHandler = () => {
    console.log("cancel");
  };

  const confirmButtonHandler = () => {
    console.log("confirm");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={cancelButtonHandler} />
        <Button
          title={isEdit ? "Update" : "Add"}
          onPress={confirmButtonHandler}
          color={Colors.green}
        />
        {isEdit ? (
          <IconButton icon="trash" color="red" onPress={deleteButtonHandler} />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
});
