import React from "react";
import { Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo, Ionicons } from "@expo/vector-icons";

import { SafeArea } from "../../components/utility/safe-area.component";
import { BlogsNavigator } from "./blogs.navigator";

const Tab = createMaterialBottomTabNavigator();

const Profile = () => {
  return (
    <SafeArea>
      <Text>This is the profile screen</Text>
    </SafeArea>
  );
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Blogs"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Blogs"
        component={BlogsNavigator}
        options={{
          tabBarLabel: "Blogs",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
