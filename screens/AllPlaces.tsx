import {useIsFocused, useRoute} from "@react-navigation/native";
import {PlacesList} from "../components/Places";
import {useEffect, useState} from "react";
import {IPlace} from "../models";
import {loadPlaces} from "../utils/database";

export function AllPlaces() {
  const isFocused = useIsFocused();

  const [loadedPlaces, setLoadedPlaces] = useState<IPlace[]>();

  useEffect(() => {
    async function fetchPlaces() {
      const places = await loadPlaces();
      setLoadedPlaces(places);
      console.log("fetch places");
      console.log(places);
    }

    if (isFocused) {
      fetchPlaces();
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}
