import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Peliculas from '../Screens/peliculas';

const Stack = createStackNavigator();
export default function PeliculasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="peliculas-stack"
        component={Peliculas}
        options={{title: 'Peliculas'}}
      />
    </Stack.Navigator>
  );
}
