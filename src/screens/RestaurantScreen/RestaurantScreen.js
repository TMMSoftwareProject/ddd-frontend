import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { app } from "../../firebase/config";

export default function RestaurantScreen(props) {
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
          if (restaurant.owner === props.user.uid) {
            newRestaurants.push(restaurant);
            newFoods.push(...foods);
          }
        });
        setRestaurants(newRestaurants);
        setFoods(newFoods);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(restaurants[0]);
  }, []);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
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
                    isAdmin: true,
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
