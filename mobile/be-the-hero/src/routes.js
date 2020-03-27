import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Detail from '../src/pages/Detail'
import Incidents from '../src/pages/incidents'

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Incidents" component={ Detail } />
        <AppStack.Screen name="Detail" component={ Incidents } />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}