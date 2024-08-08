import {useIsFocused, useRoute} from "@react-navigation/native";
import {PlacesList} from "../components/Places";
import {useEffect, useState} from "react";
import {IPlace} from "../models";

export function AllPlaces() {
  const isFocused = useIsFocused();
  const route = useRoute();

  const [loadedPlaces, setLoadedPlaces] = useState<IPlace[]>([]);

  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((prevPlaces) => [
        ...(prevPlaces as IPlace[]),
        (route.params as {place: IPlace}).place,
      ]);
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces} />;
}
