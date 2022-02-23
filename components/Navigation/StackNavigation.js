import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import OnBoardScreen from "../views/screens/OnBoardScreen";
import DetailsScreen from "../views/screens/DetailScreen";
import HomeScreen from "../views/screens/HomeScreen";
import CreateTrip from "../Trip/CreateTrip";
import UserProfile from "../Profile/UserProfile";
import EditProfile from "../Profile/EditProfile";
import UpdateTrip from "../Trip/UpdateTrip";

const StackNavigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen"
    >
      <Screen name="OnBoardScreen" component={OnBoardScreen} />
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="DetailsScreen" component={DetailsScreen} />
      <Screen name="CreateTrip" component={CreateTrip} />
      <Screen name="UserProfile" component={UserProfile} />
      <Screen name="EditProfile" component={EditProfile} />
      <Screen name="UpdateTrip" component={UpdateTrip} />
    </Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
