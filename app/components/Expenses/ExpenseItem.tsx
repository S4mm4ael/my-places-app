import React from "react";
import {Pressable, View, Text, StyleSheet} from "react-native";
import {Expense} from "../../constants";
import {getFormattedDate} from "../../utils";
import {useNavigation} from "@react-navigation/native";
import {RootNavigationProps} from "@/app/navigators/RootStackNavigator";

export const ExpenseItem = ({
  id,
  description,
  amount,
  date,
}: Partial<Expense>) => {
  const {navigate} = useNavigation<RootNavigationProps>();

  const expensePressHandler = () => {
    navigate("ManageExpense", {id: id});
  };

  return (
    <Pressable style={styles.pressable} onPress={expensePressHandler}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>
            {date ? getFormattedDate(date) : null}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount?.toFixed(2)}</Text>
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
