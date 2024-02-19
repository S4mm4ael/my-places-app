import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/constatnts";
import { ReactComponentElement, ReactNode } from "react";

interface IPrimaryButtonProps {
  childComponent: ReactNode;
  onPress?: () => void;
}

function PrimaryButton({ childComponent, onPress }: IPrimaryButtonProps) {
  return (
    <View style={styles.primaryButtonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.primaryButtonInnerContainer]
            : styles.primaryButtonInnerContainer
        }
        android_ripple={{ color: colors.PrimeBrown }}
      >
        {childComponent}
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
    backgroundColor: colors.SecondaryRed,
    alignItems: "center",
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
    color: colors.White,
    textAlign: "center",
  },
  //IOs
  pressed: {
    opacity: 0.75,
  },
});
