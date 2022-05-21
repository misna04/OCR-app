import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ListComponent from '../Containers/ListComponents';
import HomeScreen from '../Containers/Home';

const Drawer = createDrawerNavigator();

const DrawerLoggedIn = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Components" component={ListComponent} />
    </Drawer.Navigator>
  );
};

export default DrawerLoggedIn;
