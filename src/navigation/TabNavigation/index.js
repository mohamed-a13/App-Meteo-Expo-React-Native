import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../../screens/HomeScreen";
import StackNavigation from "../StackNavigation";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#1B1A1E",
          tabBarShowLabel: false,
          tabBarStyle: {
            elevation: 0,
            position: "absolute",
            bottom: 0,
            paddingTop: 2,
            paddingBottom: 2,
            backgroundColor: "#00bfff",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="weather-partly-cloudy"
                size={28}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="StackNavigation"
          component={StackNavigation}
          options={{
            tabBarLabel: "City",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="city-variant-outline"
                size={28}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
