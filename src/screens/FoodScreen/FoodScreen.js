import React, { useState, useEffect } from "react";
import { Image, Text, View, Button } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { app, auth } from "../../firebase/config";
import styles from "./styles";
import firebase from "firebase";

export default function FoodScreen(props) {
  const handleAddModal = () => {
    console.log("clicked");
  };

  const handleShowModal = () => {
    console.log("clicked");
  };
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
        <View style={styles.foods}>
          <View style={styles.food}>
            <View style={styles.foodhead}>
              <Text style={styles.foodname}>
                {props.route.params.food.name}
              </Text>
              <Text style={styles.foodprice}>
                {props.route.params.food.price} Turkish Lira
              </Text>
            </View>
            {props.route.params.isAdmin &&
              !props.route.params.food.hasModal && (
                <Button
                  onPress={handleAddModal}
                  title="Add Modal"
                  color="orange"
                  accessibilityLabel="Add Modal Button"
                />
              )}

            {props.route.params.food.hasModal && (
              <Button
                onPress={handleShowModal}
                title="Show Modal"
                color="orange"
                accessibilityLabel="Add Modal Button"
              />
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
