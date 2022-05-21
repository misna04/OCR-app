import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuDrawer from './DrawerLoggedIn';
import HomeScreen from '../Containers/Home';
import CardScreen from '../Containers/ListCard';
// import Geolocation from '../Containers/Geolocation';

import DetailsScreen from '../Containers/Details';
import LazyLoadScreen from '../Containers/LazyLoad';

const HomeStack = createNativeStackNavigator();

const StackLoggedIn = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={MenuDrawer}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="Lazyload" component={LazyLoadScreen} />
      <HomeStack.Screen name="ListCard" component={CardScreen} />
      {/* <HomeStack.Screen name="GeolocationScreen" component={Geolocation} /> */}
    </HomeStack.Navigator>
  );
};

export default StackLoggedIn;
