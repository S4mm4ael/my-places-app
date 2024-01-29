import { Text, View, StyleSheet } from "react-native";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponent guess</Text>
      <Text>GUESS</Text>

      <View>
        <Text>Higher or lower</Text>
        <Text>+-</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});
