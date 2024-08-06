import {View, StyleSheet, Alert, Text, Image} from "react-native";
import {ButtonOutlined} from "../UI";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import {getMapPreview} from "../../utils/locations";
import {useState} from "react";

export function LocationPicker() {
  const [pickedLocation, setPickedLocation] = useState<
    Coordinates | undefined
  >();

  async function verifyUserPermissions() {
    const [locationPermissionInformation, requestLocationPermission] =
      useForegroundPermissions();

    if (
      locationPermissionInformation?.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponce = await requestLocationPermission();

      return permissionResponce.granted;
    }

    if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permission Denied",
        "You need to grant location permission to use this feature"
      );
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyUserPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }

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
          onPress={getLocationHandler}
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
