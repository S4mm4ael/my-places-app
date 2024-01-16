import { View, Text, StyleSheet, Pressable } from "react-native";

export interface IItemData {
  text: string;
  id: string;
}

interface GoalItemProps {
  data: IItemData;
  deleteItem: (id: string) => void;
}

function GoalItem({ data, deleteItem }: GoalItemProps) {
  return (
    <Pressable onPress={() => deleteItem(data.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{data.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 12,
    borderRadius: 6,
    padding: 12,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
  },
});
