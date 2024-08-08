import {View, StyleSheet, Alert, Text, Image} from "react-native";
import {ButtonOutlined} from "../UI";
import * as Location from "expo-location";
import {useEffect, useState} from "react";
import {useIsFocused, useNavigation, useRoute} from "@react-navigation/native";
import {ICoordinates} from "../../models";
import MapView, {MapViewProps, Marker} from "react-native-maps";
import {getAddressFromCoordinates} from "../../utils/locations";

export function LocationPicker({
  onPickLocation,
  setAddress,
}: {
  onPickLocation: (location: ICoordinates) => void;
  setAddress: (address: string) => void;
}) {
  const {navigate} = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  const [pickedLocation, setPickedLocation] = useState<
    ICoordinates | undefined
  >();

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: (route.params as {pickedLocation: ICoordinates}).pickedLocation
          .lat,
        lng: (route.params as {pickedLocation: ICoordinates}).pickedLocation
          .lng,
      };

      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  useEffect(() => {
    if (!pickedLocation) return;

    async function handleLocation() {
      const address = await getAddressFromCoordinates(
        pickedLocation.lat,
        pickedLocation.lng
      );
      onPickLocation(pickedLocation);
      setAddress(address ?? "");
    }

    handleLocation();
  }, [pickedLocation]);

  //ISNT WORKING SINCE API GOOGLE MAPS IS NOT WORKING WITHOUT CREDIT CARD BILLING
  // useEffect(() => {
  //   checkIfLocationEnabled();
  //   getCurrentLocation();
  // }, []);

  // const checkIfLocationEnabled = async () => {
  //   let enabled = await Location.hasServicesEnabledAsync(); //returns true or false
  //   if (!enabled) {
  //     Alert.alert("Location not enabled", "Please enable your Location", [
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "cancel",
  //       },
  //       {text: "OK", onPress: () => console.log("OK Pressed")},
  //     ]);
  //   }
  // };

  const getCurrentLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync(); //used for the pop up box where we give permission to use location

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

    if (coords) {
      const {latitude, longitude} = coords;

      setPickedLocation({lat: latitude, lng: longitude});
      onPickLocation({lat: latitude, lng: longitude});
    }
  };

  function pickOnMapHandler() {
    navigate({name: "Map"});
  }

  //let locationPreview = <Text>No location picked yet.</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.mapPreview}>
        <MapView
          style={styles.mapImage}
          initialRegion={{
            latitude: pickedLocation ? pickedLocation.lat : 37.78,
            longitude: pickedLocation ? pickedLocation.lng : -122.43,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: pickedLocation ? pickedLocation.lat : 37.78,
              longitude: pickedLocation ? pickedLocation.lng : -122.43,
            }}
          />
        </MapView>
        {
          //ISNT WORKING SINCE API GOOGLE MAPS IS NOT WORKING WITHOUT CREDIT CARD BILLING
          /* {pickedLocation ? (
          <Image
            source={{
              uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
            }}
            style={styles.mapImage}
          />
        ) : (
          locationPreview
        )} */
        }
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
