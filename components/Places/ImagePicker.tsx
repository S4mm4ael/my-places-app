import {
  launchCameraAsync,
  ImagePickerOptions,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import {Alert, Button, ScrollView, View} from "react-native";

export function ImagePicker() {
  const [cameraPermission, requestPermission] = useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermission?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponce = await requestPermission();

      return permissionResponce.granted;
    }

    if (cameraPermission?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permission Denied",
        "You need to grant camera permission to use this feature"
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const cameraOptions = {
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    } as ImagePickerOptions;

    const image = await launchCameraAsync(cameraOptions);
    return image;
  }

  return (
    <ScrollView>
      <View>
        <View></View>
        <Button title="Take Image" onPress={takeImageHandler} />
      </View>
    </ScrollView>
  );
}
