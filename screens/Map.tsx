import {useCallback, useLayoutEffect, useState} from "react";
import {Alert, StyleSheet} from "react-native";
import MapView, {MapViewProps, Marker} from "react-native-maps";
import {ICoordinates} from "../models";
import {NavigationProp} from "@react-navigation/native";
import {IconButton} from "../components/UI";
import {colors} from "../constants/colors";

const mapOptions: MapViewProps = {
  initialRegion: {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
};

export function Map({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: any;
}) {
  const initialLocation = route.params?.initialLocation as ICoordinates;

  if (initialLocation) {
    mapOptions.initialRegion = {
      latitude: initialLocation.lat,
      longitude: initialLocation.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  }

  const [selectedLocation, setSelectedLocation] = useState<
    ICoordinates | undefined
  >(initialLocation);

  function pickLocationHandler(event: any) {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  }

  const savePickedLocation = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("No location picked", "Please pick a location first", [
        {text: "Okay"},
      ]);
      return;
    }

    navigation.navigate("AddPlace", {pickedLocation: selectedLocation});
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (initialLocation) return;

    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name="save"
          size={24}
          color={colors.light}
          onPress={savePickedLocation}
        />
      ),
    });
  }, [navigation, selectedLocation, initialLocation]);

  return (
    <MapView style={styles.map} onPress={pickLocationHandler} {...mapOptions}>
      {selectedLocation ? (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      ) : null}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
