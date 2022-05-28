import React, { useState, useEffect } from "react";
import { Image, Text, View, Button } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { app, auth } from "../../firebase/config";
import styles from "./styles";
import firebase from "firebase";

export default function HomeScreen(props) {
  const [restaurants, setRestaurants] = useState([]);
  const [foods, setFoods] = useState([]);
  const restaurantsRef = app.firestore().collection("restaurants");
  useEffect(() => {
    restaurantsRef.onSnapshot(
      (querySnapshot) => {
        const newRestaurants = [];
        const newFoods = [];
        querySnapshot.forEach((doc) => {
          const restaurant = doc.data();
          const foods = doc.data().foods;
          newRestaurants.push(restaurant);
          newFoods.push(...foods);
        });
        setRestaurants(newRestaurants);
        setFoods(newFoods);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log("_________________________________________________");
    console.log("RESTAURANTS");
    console.log(restaurants);
    console.log("_________________________________________________");
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
        <View style={styles.headerView}>
          <Text
            onPress={() => props.navigation.navigate("Home")}
            style={styles.headerLink}
          >
            Home Screen
          </Text>
          <Text
            onPress={() => props.navigation.navigate("Restaurant")}
            style={styles.headerLink}
          >
            Your Restaurant
          </Text>

          <Text
            onPress={() =>
              auth.signOut().then(() => console.log("User signed out"))
            }
            style={styles.headerLink}
          >
            Sign Out
          </Text>
        </View>
        {foods.map((food) => (
          <View
            style={styles.food}
            onPress={() =>
              props.navigation.navigate("Food", {
                food,
              })
            }
            key={food.name}
          >
            <View style={styles.foodhead}>
              <Text style={styles.foodname}>{food.name}</Text>
              <Text style={styles.foodname}>{food.price}</Text>
              <Button
                onPress={() =>
                  props.navigation.navigate("Food", {
                    food,
                    isAdmin: false,
                  })
                }
                title="Details"
                color="orange"
                accessibilityLabel="Details Button"
              />
            </View>
          </View>
        ))}
      </KeyboardAwareScrollView>
    </View>
  );
}
