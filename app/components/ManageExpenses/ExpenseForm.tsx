import {View, Text, StyleSheet, Button} from "react-native";
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
  const [inputsValues, setInputsValues] = useState({
    expenseId: expenseId,
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormattedDate(defaultValues.date) : "",
    description: defaultValues ? defaultValues.description : "",
  });

  const inputChangeHandler = (
    inputIdentifier: string,
    enteredValue: string
  ) => {
    setInputsValues((prevInputsValues: any) => {
      return {...prevInputsValues, [inputIdentifier]: enteredValue};
    });
  };

  const submitHandler = () => {
    const expenseData = {
      id: expenseId,
      amount: +inputsValues.amount,
      date: new Date(inputsValues.date),
      description: inputsValues.description,
    };

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
