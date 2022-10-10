import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import PeliculasStack from './PeliculasStack';
import SeriesStack from './SeriesStack';
import ProximamenteStack from './ProximamenteStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'peli') {
            iconName = focused ? 'play' : 'play';
          } else if (route.name === 'serie') {
            iconName = focused ? 'video-camera' : 'video-camera';
          } else if (route.name === 'proximo') {
            iconName = focused ? 'rocket' : 'rocket';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="peli"
        component={PeliculasStack}
        options={{title: 'Peliculas'}}
      />
      <Tab.Screen
        name="serie"
        component={SeriesStack}
        options={{title: 'Series'}}
      />
      <Tab.Screen
        name="proximo"
        component={ProximamenteStack}
        options={{title: 'Proximamente'}}
      />
    </Tab.Navigator>
  );
}
