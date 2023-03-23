import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import StartScreen from './../screens/StartScreen';
import AuthScreen from './../screens/AuthScreen';
import LogInScreen from './../screens/LogInScreen';
import RegisterScreen from '../screens/RegisterScreen';


const AuthStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Login" component={LogInScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})
