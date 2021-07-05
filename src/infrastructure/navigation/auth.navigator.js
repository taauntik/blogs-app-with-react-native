import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../../features/auth/screens/main.screen.js";
import { SignUpScreen } from "../../features/auth/screens/sign-up.screen.js";
import { LoginScreen } from "../../features/auth/screens/login.screen.js";

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};
