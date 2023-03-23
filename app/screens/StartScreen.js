import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native'
import AppButton from '../components/AppButton'

const {height} = Dimensions.get('screen')
const StartScreen = ({navigation}) => {
    return (
        <ImageBackground style={styles.background}  source={require('../assets/background.jpg')}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Wassup.</Text>
                <Text style={styles.subtitle}>Lets move forward</Text>
            </View>
                <AppButton icon="account" title="Get Started" color="secondary" onPress={() => navigation.navigate("Auth")}/>
        </ImageBackground>
    )
}

export default StartScreen

const styles = StyleSheet.create({
    background:{
        flex:1,
        padding:30,
        justifyContent:'flex-end',
    },
    textContainer:{
        position:'absolute',
        top:height/3,
        left:30
    },
    title:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:50,
    },
    subtitle:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:30
    }
})
