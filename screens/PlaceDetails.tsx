import {ScrollView, View, Text, StyleSheet} from "react-native";
import {ButtonOutlined} from "../components/UI";

function PlaceDetails() {
  function pressOnMapHandler() {
    // Implement the handler logic here
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>Address</Text>
      </View>
      <ButtonOutlined
        title="View on map"
        name={"key"}
        onPress={pressOnMapHandler}
        style={styles.button}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  addressContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  addressText: {
    fontSize: 16,
    color: "#333",
  },
  button: {
    marginTop: 20,
  },
});

export default PlaceDetails;
