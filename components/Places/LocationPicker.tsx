import {View, StyleSheet, Alert, Text, Image} from "react-native";
import {ButtonOutlined} from "../UI";
import * as Location from "expo-location";
import {getMapPreview} from "../../utils/locations";
import {useEffect, useState} from "react";

interface ICoordinates {
  lat: string;
  lng: string;
}

export function LocationPicker() {
  const [pickedLocation, setPickedLocation] = useState<
    ICoordinates | undefined
  >(undefined);

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync(); //returns true or false
    if (!enabled) {
      Alert.alert("Location not enabled", "Please enable your Location", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {text: "OK", onPress: () => console.log("OK Pressed")},
      ]);
    }
  };

  const getCurrentLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync(); //used for the pop up box where we give permission to use location
    console.log(status);
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Allow the app to use the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {text: "OK", onPress: () => console.log("OK Pressed")},
        ]
      );
    }

    const {coords} = await Location.getCurrentPositionAsync();
    console.log(coords);

    if (coords) {
      const {latitude, longitude} = coords;

      setPickedLocation({lat: latitude.toString(), lng: longitude.toString()});
    }
  };

  function pickOnMapHandler() {}

  let locationPreview = <Text>No location picked yet.</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.mapPreview}>
        {pickedLocation ? (
          <Image
            source={{
              uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
            }}
            style={styles.mapImage}
          />
        ) : (
          locationPreview
        )}
      </View>
      <View style={styles.actions}>
        <ButtonOutlined
          name="location"
          title="Locate user"
          onPress={getCurrentLocation}
        />
        <ButtonOutlined
          name="map"
          title="Pick on Map"
          onPress={pickOnMapHandler}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  mapPreview: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});
