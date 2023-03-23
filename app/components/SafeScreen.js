import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import Constants from 'expo-constants'

const SafeScreen = ({children,style}) => {
    return (
        <SafeAreaView style={[styles.screen,style]}>
            {children}
        </SafeAreaView>
    )
}

export default SafeScreen

const styles = StyleSheet.create({
    screen:{
        marginTop:Constants.statusBarHeight+13,
        flex:1
    }
})
