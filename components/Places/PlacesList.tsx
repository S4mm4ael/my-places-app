import {FlatList} from "react-native";

function PlacesList() {
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <PlaceItem place={item} />}
    />
  );
}

export default PlacesList;
