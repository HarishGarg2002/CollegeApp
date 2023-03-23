import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native'
import colors from '../utils/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import api from '../api/api'

const {width,height} = Dimensions.get('screen')

const CategoryInput = ({type,onPress,category}) => {

    const {image,name} = category

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles[`container_${type}`]}>
                <View>
                {image && <Image source={{uri:image}} style={styles[`image_${type}`]} resizeMode='cover'/>}
                </View>
                <Text style={styles[`text_${type}`]}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryInput

const styles = StyleSheet.create({
    container_small:{
        height:50,
        width:60,
        backgroundColor:colors.white,
        overflow:'hidden',
        alignItems:'center',
        justifyContent: 'center',
        paddingBottom:4
    },
    container_large:{
        height:height*0.18,
        width:width*0.318,
        backgroundColor:colors.white,
        borderColor:colors.light2,
        marginRight:5,
        marginBottom:5,
        borderWidth:0.3,
        overflow:'hidden',
        alignItems:'center',
        justifyContent: 'center',
    },
    image_small:{
        width:46,
        height:40,
    },
    image_large:{
       height:height*0.15,
       width:width*0.317
    },

    text_small:{
        fontWeight:"bold",
        fontSize:9
    },
    text_large:{
        fontWeight:"bold",
    }
})
