import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './components/Stack';
import AppBar from './components/ResponsiveAppBar';

export default function App() {
  return (
      <React.Fragment>
        <AppBar></AppBar>
        <NavigationContainer>
          <Stack></Stack>
        </NavigationContainer>
      </React.Fragment>
  );
}
