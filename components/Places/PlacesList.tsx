import {FlatList, Text, View, StyleSheet} from "react-native";
import PlaceItem from "./PlaceItem";

export function PlacesList({places}) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.noPlacesContainer}>
        <Text style={styles.noPlacesText}>
          No places found. Maybe start adding some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <PlaceItem place={item} />}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  noPlacesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  noPlacesText: {
    fontSize: 16,
    color: "#666",
  },
  list: {
    padding: 10,
  },
});
