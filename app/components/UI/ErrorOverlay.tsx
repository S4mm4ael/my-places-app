import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Button} from "./Button";

interface ErrorOverlayProps {
  errorMessage: string | null;
  onConfirm: () => void;
}

export const ErrorOverlay: React.FC<ErrorOverlayProps> = ({
  errorMessage,
  onConfirm,
}) => {
  return (
    <View style={styles.overlay}>
      <Text style={styles.errorText}>{errorMessage}</Text>
      <Button onPress={onConfirm} title="Okay" />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  errorText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
