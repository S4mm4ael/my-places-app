import { Text, View, StyleSheet } from "react-native";
import { Title } from "../components/Title";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title text="Opponent Guess" />
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
    height: 100,
    padding: 16,
  },
});
