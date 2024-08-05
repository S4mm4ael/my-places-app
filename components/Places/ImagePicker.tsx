import {launchCameraAsync, ImagePickerOptions} from "expo-image-picker";
import {Button, View} from "react-native";

export function ImagePicker() {
  async function takeImageHandler() {
    const cameraOptions = {
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    } as ImagePickerOptions;

    const image = await launchCameraAsync(cameraOptions);
    return image;
  }

  return (
    <View>
      <View></View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}
