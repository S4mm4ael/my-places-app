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
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => deleteItem(data.id)}
        style={({ pressed }) => pressed && styles.goalItem__pressed}
      >
        <Text style={styles.goalText}>{data.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 12,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItem__pressed: {
    opacity: 0.5,
  },
  goalText: {
    padding: 12,
    color: "#fff",
  },
});
