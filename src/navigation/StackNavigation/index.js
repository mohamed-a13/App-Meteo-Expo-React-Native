import { Easing } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import SearchScreen from "../../screens/SearchScreen";
import WeatherCity from "../../screens/WeatherCity";

const Stack = createStackNavigator();

const openConfig = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: "spring",
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        gestureEnabled: true,
        gestureDirection: "horizontal",
        transitionSpec: {
          open: openConfig,
          close: closeConfig,
        },
      }}
      headerShow="float"
      animation="fade"
    >
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: "Rechercher une ville",
          headerStyle: {
            backgroundColor: "#00bfff",
          },
          headerTintColor: "white",
        }}
        screenOptions={{}}
      />
      <Stack.Screen
        name="WeatherCity"
        component={WeatherCity}
        options={{
          title: "Météo",
          headerStyle: {
            backgroundColor: "#00bfff",
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
