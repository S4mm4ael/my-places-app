import {useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AllPlaces, AddPlace, Map} from "./screens";
import {IconButton} from "./components/UI";
import {init} from "./utils/database";
import AppLoading from "expo-app-loading";
import PlaceDetails from "./screens/PlaceDetails";
import * as Notifications from "expo-notifications";
import {Alert, Platform} from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    };
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    async function registerForPushNotifications() {
      const {status} = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      if (status !== "granted") {
        const {status} = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        Alert.alert(
          "No notification permissions!",
          "You need to enable notifications permissions in your settings",
          [{text: "OK"}]
        );
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();
      console.log("User Expo App token", token);

      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.DEFAULT,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }

      scheduleNotificationHandler();
    }
    registerForPushNotifications();
  }, []);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const subscription1 = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
      }
    );

    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

  if (!dbInitialized) {
    return <AppLoading />;
  }

  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Check your places",
        body: "Don't forget to check your places today",
      },
      trigger: {
        hour: 20,
        minute: 0,
        repeats: true,
      },
    });
  }

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
          <Stack.Screen name="Map" component={Map} options={{title: "Map"}} />
          <Stack.Screen
            name="PlaceDetails"
            component={PlaceDetails}
            options={{title: "Place details"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
