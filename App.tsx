import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AllPlaces, AddPlace} from "./screens";
import {IconButton} from "./components/UI";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "white",
            headerStyle: {backgroundColor: "#007bff"},
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({navigation}) => ({
              title: "All Places",
              headerRight: ({tintColor}) => (
                <IconButton
                  name="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            options={{title: "Add Place"}}
            component={AddPlace}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
