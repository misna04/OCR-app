import React, {createContext, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import apiauth from '../Services/Auth';

export const AuthenticationContext = createContext();

export function useAuthentication() {
  return useContext(AuthenticationContext);
}

export default function AuthenticationProvider(props) {
  const [auth, setAuth] = useState({});
  const [errormsg, setErrormsg] = useState('');
  const navigation = useNavigation();

  const signIn = async sendBody => {
    try {
      const resdata = await apiauth.authRequest(sendBody);
      const resultValue = await resdata.data.user;

      await setAuth(resultValue);
      await setErrormsg(false);
      await AsyncStorage.setItem('token', resdata.data.token);
      await AsyncStorage.setItem('user', JSON.stringify(resultValue));
      navigation.navigate('LoggedInStack');
    } catch (error) {
      console.log('else error', error.message);
      await setErrormsg(error.message);
      navigation.navigate('NotLoggedInStack');
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    navigation.navigate('NotLoggedInStack');
  };

  return (
    <AuthenticationContext.Provider
      value={{setAuth, signIn, signOut, auth, errormsg}}
      {...props}
    />
  );
}
