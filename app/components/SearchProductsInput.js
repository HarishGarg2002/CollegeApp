import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import {Feather} from '@expo/vector-icons'
import colors from '../utils/colors'

const SearchProductsInput = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image style={styles.image} source={require('../assets/category.png')} resizeMode='cover'/>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>Shoes</Text>
                <Text style={styles.subtitle}>In Men's Sports Shoes</Text>
            </View>
            <Feather name="arrow-up-left"  color={colors.gray} size={29} style={styles.icon}/>
        </View>
    )
}

export default SearchProductsInput

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height:70,
        width:'100%',
        alignItems: 'center',
        paddingHorizontal:10
    },
    image:{
        height:70,
        width:70
    },
    rightContainer:{
        marginLeft:6
    },
    title:{
        color:colors.gray,
        fontSize:17
    },
    subtitle:{
        color:colors.blue,
        fontSize:14
    },
    icon:{
        position:"absolute",
        right:10
    }
})
