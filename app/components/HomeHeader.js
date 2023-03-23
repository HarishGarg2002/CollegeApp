import React from 'react'
import { StyleSheet, Text, View, Image, Animated } from 'react-native'
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import SearchInput from './SearchInput';
import SafeScreen from './SafeScreen';
import {useNavigation} from '@react-navigation/native'
import CategoryList from './CategoryList'

const HomeHeader = ({translateY,opacityY,heightY}) => {

    const navigation = useNavigation()

    return (
        <Animated.View style={{
                transform:[
                    {translateY:translateY}
                ],
                elevation:100,
                zIndex:100,
                position:"absolute",
                top:0,
                left:0,
                right:0,
        }}>
        <View style={styles.header}>
            <Animated.View style={[styles.top,{
                opacity:opacityY,
                // height:heightY,
            }]}>
                <FontAwesome name="bars" color="white" size={18} onPress={()=>navigation.openDrawer()}/>
                <Image style={styles.logo} source={require('../assets/flipkart.png')} resizeMode='contain'/>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="bell" style={styles.icon} size={20} color="white"/>
                    <MaterialCommunityIcons name="cart" style={styles.icon} size={20} color="white" onPress={() => navigation.navigate('My Cart')}/>
                </View>
            </Animated.View>
            <View style={styles.searchContainer}>
                <SearchInput/>
            </View>
        </View>
            <CategoryList/> 
        </Animated.View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    // container: {
    //     position:"absolute",
    //     top:0,
    //     left:0,
    //     right:0,
    // },
    header:{
        backgroundColor:"#047BD5",
        paddingTop:0,
        paddingBottom:12,
        paddingHorizontal:12,
        // marginBottom:6,
    },
    top:{
        paddingTop:0,
        flexDirection:"row",
        alignItems: "center",
    },
    logo:{
        width:70,
        // backgroundColor:"red",
        height:45,
        marginLeft:15
    },
    iconContainer:{
        flexDirection:"row",
        position:"absolute",
        right:0
    },
    icon:{
        marginHorizontal:5
    },
    searchContainer: {
        alignItems: "center",
    }
})
