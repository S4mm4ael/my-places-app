import {View, StyleSheet} from "react-native";
import {ButtonOutlined} from "../UI";

export function LocationPicker() {
  function getLocationHandler() {}

  function pickOnMapHandler() {}

  return (
    <View style={styles.container}>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <ButtonOutlined
          name="location"
          title="Locate user"
          onPress={getLocationHandler}
        />
        <ButtonOutlined
          name="map"
          title="Pick on Map"
          onPress={pickOnMapHandler}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  mapPreview: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
