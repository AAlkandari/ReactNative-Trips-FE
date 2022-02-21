import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import OnBoardScreen from "../views/screens/OnBoardScreen";
import DetailsScreen from "../views/screens/DetailScreen";
import HomeScreen from "../views/screens/HomeScreen";

const StackNavigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="OnBoardScreen" component={OnBoardScreen} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="DetailsScreen" component={DetailsScreen} />
    </Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
