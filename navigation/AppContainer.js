import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login";
import Signup from "../screens/signup";
import Home from "../screens/home";
import Contact from "../components/contact";

const Stack = createStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{title:"Contacts"}}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
