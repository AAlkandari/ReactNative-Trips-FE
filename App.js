import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./components/Navigation/StackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StackNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
