import {
  launchCameraAsync,
  ImagePickerOptions,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import {useState} from "react";
import {
  Alert,
  Button,
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import {ButtonOutlined} from "../UI";

export function ImagePicker() {
  const [pickedImage, setPickedImage] = useState<string | undefined>();

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
    setPickedImage(image?.assets?.[0]?.uri);
  }

  let imagePreview = <Text>No image picked yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image source={{uri: pickedImage}} style={styles.image} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imagePreviewContainer}>{imagePreview}</View>
      <ButtonOutlined title="Take Image" onPress={takeImageHandler} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imagePreviewContainer: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
