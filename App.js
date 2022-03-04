import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './components/DrawerNavigator';


export default function App() {
  return (
      <React.Fragment>
        <NavigationContainer>
          <DrawerNavigator></DrawerNavigator>
        </NavigationContainer>
      </React.Fragment>
  );
}
