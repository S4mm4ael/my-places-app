import {Pressable, View, Image, Text, StyleSheet} from "react-native";
import {IPlace} from "../../models/place";
import {Ionicons} from "@expo/vector-icons";

interface IPlaceItem {
  place: IPlace;
  onSelect: () => void;
}

export function PlaceItem({place, onSelect}: IPlaceItem) {
  let imageThumb = <Ionicons name="image" size={24} color="black" />;

  if (place.imageUri) {
    imageThumb = <Image source={{uri: place.imageUri}} style={styles.image} />;
  }

  console.log(place);

  return (
    <Pressable onPress={onSelect} style={styles.container}>
      {imageThumb}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{place.title}</Text>
        {place.address && <Text style={styles.address}>{place.address}</Text>}
        {place.location && (
          <Text style={styles.coords}>
            Lat:{place.location.lat} Lon: {place.location.lng}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 6,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    color: "#666",
  },
  coords: {
    fontSize: 10,
    color: "#666",
  },
});
