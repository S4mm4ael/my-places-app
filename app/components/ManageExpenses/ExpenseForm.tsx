import {View, Text, StyleSheet} from "react-native";
import React, {useState} from "react";
import {Input} from ".";

export const ExpenseForm = () => {
  const [inputsValues, setInputsValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const inputChangeHandler = (
    inputIdentifier: string,
    enteredValue: string
  ) => {
    setInputsValues((prevInputsValues: any) => {
      return {...prevInputsValues, [inputIdentifier]: enteredValue};
    });
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          textInputConfig={{
            placeholder: "Enter amount",
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputsValues.amount,
          }}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "Year-Month-Day",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputsValues.date,
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          placeholder: "Enter description",
          maxLength: 200,
          multiline: true,
          autoCorrect: false,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputsValues.description,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
});
