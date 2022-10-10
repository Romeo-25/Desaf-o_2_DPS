import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Proximamente from '../Screens/proximamente';

const Stack = createStackNavigator();
export default function ProximamenteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="proximamente-stack"
        component={Proximamente}
        options={{title: 'Proximamente'}}
      />
    </Stack.Navigator>
  );
}
