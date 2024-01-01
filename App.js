import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import AuthContext from './src/Context/Auth'; 

export default function App() {
  return (
    <NavigationContainer>
      <AuthContext>
        <Routes/>
      </AuthContext>
    </NavigationContainer>
  );
}

