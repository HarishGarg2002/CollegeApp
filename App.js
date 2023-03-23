import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './app/Navigation/AuthStack';
import axios from 'axios'
import AppButton from './app/components/AppButton';
import AuthContext from './app/auth/AuthContext'
import authStorage from './app/auth/storage'
import jwt_decode from 'jwt-decode'
import AppStack from './app/screens/HomeScreen'
import HomeStack from './app/Navigation/HomeStack';
import AppDrawer from './app/Navigation/AppDrawer';

export default function App() {

    
    const [user,setUser] = useState()

    const loadToken = async() => {
      const token = await authStorage.getToken();

      const user = jwt_decode(token)
      setUser(user)
    }

    useEffect(() => (
      loadToken()
      ),[]);

      
  return (
    <AuthContext.Provider value={{user,setUser}}>
      <NavigationContainer>
       {!user ? <AuthStack/> : <AppDrawer/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}


