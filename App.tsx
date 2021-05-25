import 'react-native-gesture-handler';
import { StatusBar, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#312e38" />
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}

