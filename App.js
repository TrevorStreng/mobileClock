import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "./components/start";
import Settings from "./components/settings";
import Main from "./components/main";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
