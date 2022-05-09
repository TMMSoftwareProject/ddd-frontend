import React from "react";
import { Image, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";

export default function HomeScreen(props, { extraData }) {
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
        </View>
        <Text>Home Screen</Text>
      </KeyboardAwareScrollView>
    </View>
  );
}
