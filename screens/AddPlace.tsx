import {useNavigation} from "@react-navigation/native";
import {PlaceForm} from "../components/Places";
import {IPlace} from "../models";
import {insertPlace} from "../utils/database";

export function AddPlace() {
  const navigation = useNavigation();
  async function createPlaceHandler(placeData: IPlace) {
    insertPlace(placeData);
    navigation.navigate("AllPlaces");
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}
