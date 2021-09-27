import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './navigation/Navigator';


export default function App() {
  return (
    <View>
      <AppContainer/>
    </View>
  );
}

