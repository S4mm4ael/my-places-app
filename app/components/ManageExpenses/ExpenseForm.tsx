import {View, Text, StyleSheet} from "react-native";
import React, {useState} from "react";
import {Input} from ".";

export const ExpenseForm = () => {
  const [amountValue, setAmountValue] = useState<string>("");

  const amountChangeHandler = (enteredAmount: string) => {
    setAmountValue(enteredAmount);
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
            onChangeText: amountChangeHandler,
            value: amountValue,
          }}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "Year-Month-Day",
            maxLength: 10,
            onChangeText: (date) => {
              console.log(date);
            },
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
          onChangeText: (date) => {
            console.log(date);
          },
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
