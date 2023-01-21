// Import React and Component
import React from "react";

// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Import Screens
import Login from "../app/screens/LoginScreen";
import Register from "../app/screens/RegisterScreen";
import SplashScreen from "../app/screens/WelcomeSplashScreen";
import AboutScreen from "../app/screens/AboutScreen";
import NewsScreen from "../app/screens/NewsScreen";


const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "orange",
      tabBarActiveTintColor: "white",
    }}
  >
    <Tab.Screen
      name="SplashScreen"
      options={{
        title: "WELCOME",
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
      component={SplashScreen}
    />
    <Tab.Screen
      name="Register"
      component={Register}
      options={{
        title: "REGISTER",
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="account-plus"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Login"
      component={Login}
      options={{
        title: "LOGIN",
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="login" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="NewsScreen"
      component={NewsScreen}
      options={{
        title: "ARTICLE",
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="newspaper" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="About"
      tabBarActiveBackgroundColor="blue"
      options={{
        title: "ABOUT",
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="information-outline"
            size={size}
            color={color}
          />
        ),
      }}
      component={AboutScreen}
    />
  </Tab.Navigator>
);

const MyStack = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default MyStack;
