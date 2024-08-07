import {useState} from "react";
import {StyleSheet} from "react-native";
import MapView, {MapViewProps} from "react-native-maps";
import {ICoordinates} from "../models";
import {Marker} from "react-native-maps";

const mapOptions: MapViewProps = {
  initialRegion: {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
};

export function Map() {
  const [selectedLocation, setSelectedLocation] = useState<
    ICoordinates | undefined
  >(undefined);

  function pickLocationHandler(event: any) {
    console.log("event", event);
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  }

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
