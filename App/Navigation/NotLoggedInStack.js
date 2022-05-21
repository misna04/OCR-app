import React, {useState, useEffect, useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from '../Containers/';

const AuthStack = createNativeStackNavigator();

export default function AuthStackScreen() {
  const [userToken, setUserToken] = useState(null);

  const getToken = async () => {
    let tokenvalue = await AsyncStorage.getItem('token');
    setUserToken(tokenvalue);
  };

  useEffect(() => {
    getToken();
    // console.log('useeffect');
  }, []);
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
    </AuthStack.Navigator>
  );
}
