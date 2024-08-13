import {ScrollView, View, Text, StyleSheet, Image} from "react-native";
import {ButtonOutlined} from "../components/UI";
import {useEffect, useState} from "react";
import {fetchPlaceDetails} from "../utils/database";
import {IPlace} from "../models";

function PlaceDetails({route, navigation}: {route: any; navigation: any}) {
  const selectedPlaceId = route.params.placeId;

  const [place, setPlace] = useState<IPlace>();

  function pressOnMapHandler() {
    navigation.navigate("Map", {initialLocation: place?.location});
  }

  useEffect(() => {
    async function loadPlaceDetails() {
      const place = await fetchPlaceDetails(selectedPlaceId);
      console.log(place);
      setPlace(place as IPlace);
      navigation.setOptions({title: place?.title});
    }
    loadPlaceDetails();
  }, [selectedPlaceId]);

  function renderSeparator() {
    return <View style={styles.separator} />;
  }

  if (!place) {
    return <Text style={styles.loaderText}>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} src={place?.imageUri} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          {place?.location ? (
            <>
              <Text style={styles.labelText}>Latitude: </Text>
              <Text style={styles.addressText}>{place.location.lat}</Text>
              <Text style={styles.labelText}>Longtitude: </Text>
              <Text style={styles.addressText}>{place?.location.lng}</Text>
            </>
          ) : (
            <Text>No location found</Text>
          )}
          {renderSeparator()}
          {place?.address ? (
            <>
              <Text style={styles.labelText}>Address:</Text>
              <Text style={styles.addressText}>{place.address}</Text>
            </>
          ) : (
            <Text>No corresponding address found</Text>
          )}
        </View>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.addressText}>Location on map</Text>
        <ButtonOutlined
          title="View on map"
          name={"map"}
          onPress={pressOnMapHandler}
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
    gap: 20,
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
    borderRadius: 10,
    // Shadow properties for iOS
    shadowColor: "#000", // Darker shadow color
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5, // Increased elevation value
  },
  loaderText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 20,
  },
});

export default PlaceDetails;
