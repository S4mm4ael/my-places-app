import {TouchableOpacity, Text, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {colors} from "../../constants/colors";

interface ButtonOutlinedProps {
  title: string;
  onPress: () => void;
  style?: any;
}

export function ButtonOutlined({title, onPress, style}: ButtonOutlinedProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Ionicons name="camera" size={24} color={colors.info} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    backgroundColor: "white",
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    color: "blue",
    fontSize: 16,
    textAlign: "center",
  },
});
