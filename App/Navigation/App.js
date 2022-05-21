import React, {useState, useEffect, useRef, useContext} from 'react';
import {NativeBaseProvider, Text, Box} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MultiProvider from '../Config/MultiProvider';
import Provider from '../Context';
// import {AuthenticationContext, PhotoContext} from '../Context/index';

import SplashScreen from '../Containers/SplashScreen';
import HomeStackScreen from './LoggedInStack';
import AuthStackScreen from './NotLoggedInStack';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MultiProvider
          providers={[<Provider.AuthProvider />, <Provider.PhotosProvider />]}>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LoggedInStack"
              component={HomeStackScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="NotLoggedInStack"
              component={AuthStackScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </MultiProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
