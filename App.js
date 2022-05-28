import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  HomeScreen,
  RegistrationScreen,
  RestaurantScreen,
  FoodScreen,
} from "./src/screens";
import { registerRootComponent } from "expo";
import { app, auth } from "./src/firebase/config";
import { decode, encode } from "base-64";
import firebase from "firebase";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
    });
  }, [auth]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home">
              {(props) => <HomeScreen {...props} user={user} />}
            </Stack.Screen>

            <Stack.Screen name="Restaurant">
              {(props) => <RestaurantScreen {...props} user={user} />}
            </Stack.Screen>

            <Stack.Screen name="Food">
              {(props) => <FoodScreen {...props} user={user} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
