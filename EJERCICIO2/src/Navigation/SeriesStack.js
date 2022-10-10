import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Series from '../Screens/series';

const Stack = createStackNavigator();
export default function SeriesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="series-stack"
        component={Series}
        options={{title: 'Series'}}
      />
    </Stack.Navigator>
  );
}
