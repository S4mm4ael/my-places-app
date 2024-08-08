import {ReactNode} from "react";
import {Pressable, StyleSheet, ViewStyle, Text} from "react-native";
import {colors} from "../../constants/colors";

interface ButtonProps {
  onPress: () => void;
  title: string;
}

export function Button({onPress, title}: ButtonProps) {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    // Shadow properties for iOS
    shadowColor: "#fff",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
  } as ViewStyle,
  buttonPressed: {
    backgroundColor: colors.success,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  } as ViewStyle,
  text: {
    color: "white",
  },
});
