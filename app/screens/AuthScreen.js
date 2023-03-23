import React from 'react'
import { StyleSheet, Text, View ,ImageBackground,Dimensions, Button} from 'react-native'
import AppButton from '../components/AppButton'
import colors from '../utils/colors'

const {height} = Dimensions.get('screen')

const AuthScreen = ({navigation}) => {
    return (
    <ImageBackground style={styles.background}  source={require('../assets/skybackground.jpg')}>
        <View style={styles.textContainer}>
            <Text style={styles.title}>Hi!!!</Text>
            <Text style={styles.subtitle}>Lets Interact</Text>
        </View>
        <View style={styles.buttonContainer}>
            <AppButton icon="account" title="Login" color="primary" onPress={() => navigation.navigate("Login")}/>
            <AppButton icon="account" style={{marginTop:10}} title="Register" color="secondary" onPress={() => navigation.navigate("Register")}/>
        </View>
    </ImageBackground>
    )
}

export default AuthScreen

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
        color:'#0000E7',
        fontWeight:"bold",
        fontSize:30
    }
})
