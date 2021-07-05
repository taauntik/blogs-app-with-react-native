import { StatusBar } from "expo-status-bar";
import React from "react";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";

import { Navigation } from "./src/infrastructure/navigation/index";
import { AuthenticationContextProvider } from "./src/infrastructure/context/authentication.context";
import { UserContextProvider } from "./src/infrastructure/context/user.context";

import { firebaseConfig } from "./firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <>
      <UserContextProvider>
        <AuthenticationContextProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </AuthenticationContextProvider>
      </UserContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
