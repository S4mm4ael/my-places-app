import { Pressable, StyleSheet, Text, View } from "react-native";

interface IPrimaryButtonProps {
  buttonText: string;
}

function PrimaryButton({ buttonText }: IPrimaryButtonProps) {
  return (
    <View style={styles.primaryButtonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.primaryButtonInnerContainer]
            : styles.primaryButtonInnerContainer
        }
        android_ripple={{ color: "#2b141f" }}
      >
        <Text style={styles.primaryButtonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  primaryButtonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  primaryButtonInnerContainer: {
    backgroundColor: "#7e3b5c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    //Android specific:
    elevation: 8,
    //IOs
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  primaryButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  //IOs
  pressed: {
    opacity: 0.75,
  },
});
