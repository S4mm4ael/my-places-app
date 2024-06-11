import React from "react";
import {Pressable, View, Text, StyleSheet} from "react-native";
import {Expense} from "../../constants";
import {getFormattedDate} from "../../utils";

export const ExpenseItem = ({
  description,
  amount,
  date,
  onPress,
}: Partial<Expense> & {onPress: () => void}) => {
  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>
            {date ? getFormattedDate(date) : null}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2, // for Android shadow
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2, // for iOS shadow
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "column",
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  amountContainer: {
    backgroundColor: "#d1e7dd",
    padding: 5,
    borderRadius: 5,
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#28a745",
  },
});
