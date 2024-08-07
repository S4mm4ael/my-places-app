import {useCallback, useState} from "react";
import {ScrollView, TextInput, View, Text, StyleSheet} from "react-native";
import {ImagePicker} from "./ImagePicker";
import {LocationPicker} from "./LocationPicker";
import {Button} from "../UI/Button";
import {ICoordinates} from "../../models";

export function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [selectedLocation, setSelectedLocation] = useState<
    ICoordinates | undefined
  >(undefined);

  function changeTitleHandler(enteredTitle: string) {
    setEnteredTitle(enteredTitle);
  }

  const takeImageHandler = useCallback((imageUri: string | undefined) => {
    imageUri && setSelectedImage(imageUri);
  }, []);

  const pickLocationHandler = useCallback((location: ICoordinates) => {
    setSelectedLocation(location);
  }, []);

  function savePlaceHandler() {
    console.log("Saved place", {enteredTitle, selectedImage, selectedLocation});
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          placeholder="Enter place title"
        />
        <Text style={styles.label}>Picture</Text>
        <ImagePicker onTakeImage={takeImageHandler} />
        <LocationPicker onPickLocation={pickLocationHandler} />
        <Button onPress={savePlaceHandler} title="Save place" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});
