import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import AppContainer from "./navigation/AppContainer";
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {
  return <Provider store={store}>
    <AppContainer />
    </Provider>;
}

export default App;
