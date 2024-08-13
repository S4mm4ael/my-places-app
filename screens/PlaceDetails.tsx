import {ScrollView, View, Text, StyleSheet, Image} from "react-native";
import {ButtonOutlined} from "../components/UI";
import {useEffect} from "react";

function PlaceDetails({route}) {
  const selectedPlaceId = route.params.placeId;

  function pressOnMapHandler() {
    // Implement the handler logic here
  }

  useEffect(() => {
    // Fetch the place details using the placeId from the route params
  }, [selectedPlaceId]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>Location lan and lng</Text>
          <Text style={styles.addressText}>Address</Text>
        </View>
      </View>
      <ButtonOutlined
        title="View on map"
        name={"key"}
        onPress={pressOnMapHandler}
        style={styles.button}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  addressContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  locationContainer: {
    width: "100%",
    alignItems: "center",
  },
  addressText: {
    fontSize: 16,
    color: "#333",
  },
  button: {
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "#ccc",
  },
});

export default PlaceDetails;
