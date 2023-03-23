import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './../screens/HomeScreen';
import ProductDisplayScreen from './../screens/ProductDisplayScreen';

const HomeStack = () => {
    const HomeStack = createStackNavigator()

    return (
        <HomeStack.Navigator screenOptions={{headerShown:false}}>
            <HomeStack.Screen name="All" component={HomeScreen}/>
            <HomeStack.Screen name="Product" component={ProductDisplayScreen}/>
        </HomeStack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})
