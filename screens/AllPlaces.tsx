import {useIsFocused} from "@react-navigation/native";
import {PlacesList} from "../components/Places";
import {useEffect, useState} from "react";
import {IPlace} from "../models";
import {loadPlaces} from "../utils/database";
import {Text} from "react-native";

export function AllPlaces() {
  const isFocused = useIsFocused();

  const [loadedPlaces, setLoadedPlaces] = useState<IPlace[]>();

  useEffect(() => {
    async function fetchPlaces() {
      const places = await loadPlaces();
      setLoadedPlaces(places);
    }

    if (isFocused) {
      fetchPlaces();
    }
  }, [isFocused]);

  if (!loadedPlaces) {
    return <Text>No places found. Maybe start adding some!</Text>;
  }

  return <PlacesList places={loadedPlaces} />;
}
