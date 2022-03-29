
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ReceptiNavigacija from "./navigacija/ReceptiNavigacija";

import { enableScreens } from "react-native-screens";
enableScreens();

const ucitajFontove = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "raleway": require("./assets/fonts/Raleway-Regular.ttf"),
    "GreatVibes-Regular":require("./assets/fonts/GreatVibes-Regular.ttf")
  });
};


export default function App() {
  const [fontUcitan, postaviFontUcitan] = useState(false);

  if (!fontUcitan) {
    return (
      <AppLoading
      startAsync={ucitajFontove}
      onFinish={()=> postaviFontUcitan(true)}
      onError={(err)=>console.log(err)}
      />
    );
  }

  return (
    <ReceptiNavigacija />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
