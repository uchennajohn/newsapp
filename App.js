import React from "react";
import { Provider } from "react-redux";


import store from "./Store";
import MyStack from "./navigation/TabNavigator";

export default function App() {
  return (
    <Provider store={store}>
   <MyStack />
    </Provider>
  );
}
