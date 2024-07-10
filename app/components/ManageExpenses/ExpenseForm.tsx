import {View, Text, StyleSheet, Button, Alert} from "react-native";
import React, {useState} from "react";
import {Input} from ".";
import {Colors, Expense} from "@/app/constants";
import {getFormattedDate} from "@/app/utils";

interface IProps {
  expenseId: string;
  onCancel: () => void;
  onSubmit: (expenseData: Expense) => void;
  confirmText: string;
  iconButton: () => JSX.Element;
  defaultValues: Expense | null;
}

export const ExpenseForm = ({
  expenseId,
  onCancel,
  onSubmit,
  confirmText,
  iconButton,
  defaultValues,
}: IProps) => {
  const [inputs, setInputs] = useState({
    expenseId: expenseId,
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: defaultValues ? true : false,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: defaultValues ? true : false,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: defaultValues ? true : false,
    },
  });

  const inputChangeHandler = (
    inputIdentifier: string,
    enteredValue: string
  ) => {
    setInputs((previnputs: any) => {
      return {
        ...previnputs,
        [inputIdentifier]: {value: enteredValue, isValid: true},
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      id: expenseId,
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("Invalid input", "Please check the errors in the form", [
        {text: "Okay"},
      ]);
      return;
    }

    onSubmit(expenseData);
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
            value: inputs.amount.value,
          }}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "Year-Month-Day",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
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
          value: inputs.description.value,
        }}
      />
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={onCancel} />
        <Button
          title={confirmText}
          onPress={submitHandler}
          color={Colors.green}
        />
        {iconButton()}
      </View>
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
    height: 350,
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10,
  },
});
