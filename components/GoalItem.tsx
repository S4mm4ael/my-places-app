import { View, Text, StyleSheet, ListRenderItemInfo } from "react-native";

export interface IItemData {
  text: string;
  id: string;
}

interface GoalItemProps {
  data: IItemData;
}

function GoalItem({ data }: GoalItemProps) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{data.text}</Text>
    </View>
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
