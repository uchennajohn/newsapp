import React from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import NewsScreen from "./app/screens/NewsScreen";
import { Provider } from "react-redux";


import store from "./Store";
import MyStack from "./navigation/StackNavigator";

export default function App() {
  return (
    <Provider store={store}>
   <MyStack />
    </Provider>
  );
}
