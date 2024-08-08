import {useNavigation} from "@react-navigation/native";
import {PlaceForm} from "../components/Places";
import {IPlace} from "../models";

export function AddPlace() {
  const navigation = useNavigation();

  function createPlaceHandler(placeData: IPlace) {
    navigation.navigate("AllPlaces", {place: placeData});
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}
