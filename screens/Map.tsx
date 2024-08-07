import {View, Text} from "react-native";
import MapView from "react-native-maps";

const mapOptions = {
  initialRegion: {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
};

export function Map() {
  return <MapView {...mapOptions}></MapView>;
}
