import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import MyOrderScreen from '../screens/MyOrderScreen'
import CategoryScreen from './../screens/CategoryScreen';
import WorldScreen from './../screens/WorldScreen';
import ChatScreen from './../screens/ChatScreen';
import HomeHeader from './../components/HomeHeader';
import MyCartScreen from './../screens/MyCartScreen';
import { StatusBar } from 'expo-status-bar';
import colors from '../utils/colors'

const AppDrawer = () => {

    const Drawer = createDrawerNavigator();

    return (
        <>
        <StatusBar backgroundColor={colors.blue}/>
        <Drawer.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:"#047BD5"
            }
        }} >
            <Drawer.Screen name="Home" component={HomeStack} options={{headerShown: false}}/>
            <Drawer.Screen name="My Orders" component={MyOrderScreen}/>
            <Drawer.Screen name="My Cart" component={MyCartScreen}/>
            <Drawer.Screen name="Categories" component={CategoryScreen}/>
            <Drawer.Screen name="World" component={WorldScreen}/>
            <Drawer.Screen name="Chat" component={ChatScreen}/>
        </Drawer.Navigator>
        </>
    )
}

export default AppDrawer

const styles = StyleSheet.create({})
