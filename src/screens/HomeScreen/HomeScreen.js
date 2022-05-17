import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { auth } from "../../firebase/config";
import styles from "./styles";
import firebase from "firebase";

export default function HomeScreen(props) {
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
        <Text>Home Screen</Text>
      </KeyboardAwareScrollView>
    </View>
  );
}
