import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native'
import colors from '../utils/colors'
import {MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/core'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const MyCartInput = ({onPress}) => {
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Kazara Boys Lace Sneakers</Text>
                    <Text style={styles.subtitle}>Size:7,Black </Text>
                    <View style={styles.ratingContainer}>
                        <View style={styles.rating}>
                            <Text style={styles.ratingText}>4.1</Text>
                            <FontAwesome name="star" color="white" style={styles.star}/>
                        </View>
                        <Text style={styles.ratingNo}>(1412)</Text>
                    </View>
                    <View style={styles.secTextContainer}>
                        <Text style={styles.price1}>₹999</Text>
                        <Text style={styles.price2}>₹349</Text>
                        <Text style={styles.off}>65% off</Text>
                    </View>
                    <Text style={styles.delivery}>Delivery by Sat Oct 30 | ₹40</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Image style={styles.image} source={require('../assets/category.png')} resizeMode='contain'/>
                </View>
        </View>
            <View style={styles.bottomContainer}>
                <View style={styles.half}>
                    <FontAwesome name="bookmark" color={colors.light3} size={14}/>
                    <Text style={styles.halfText}>Bookmark</Text>
                </View>
                <View style={styles.half}>
                    <MaterialCommunityIcons name="delete" color={colors.light3} size={17}/>
                    <Text style={styles.halfText}>Remove</Text>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default MyCartInput

const styles = StyleSheet.create({
    outerContainer:{
        marginVertical:4
    },
    container: {
        flexDirection: 'row',
        backgroundColor:colors.white,
        paddingTop:12
    },
    rightContainer:{
        flex:35
    },
    image:{
        width:'100%',
        height: 90
    },
    textContainer:{
        alignItems:'flex-start',
        fontWeight:"bold",
        paddingLeft:17,
        paddingTop:0,
        flex:70,
        paddingBottom:10
    },
    title:{
        fontSize:17,
        color:"black",
        marginBottom:4
    },
    subtitle:{
        color:colors.gray,
        fontSize:13,
        marginBottom:5
    },
    secTextContainer:{
        flexDirection: 'row',
        marginTop:10,
        marginBottom:12
    },
    delivery:{
        fontSize:12
    },
    price1:{
        color:colors.gray,
        textDecorationLine:'line-through',
        fontSize:18
    },
    price2:{
        color:"red",
        fontSize:18,
        marginHorizontal:5
    },
    off:{
        color:"green",
        fontSize:18
    },
    ratingContainer:{
        flexDirection: 'row',
    },
    rating:{
        flexDirection: 'row',
        backgroundColor: "green",
        alignItems: 'center',
        borderRadius: 20,
        paddingHorizontal:5,
    },
    ratingText:{
        color:"white",
        fontSize:13
    },
    ratingNo:{
        marginLeft:6,
        color:colors.gray,
        fontSize:13
    },
    bottomContainer:{
        backgroundColor:"white",
        flexDirection: 'row',
        paddingVertical:15,
        borderColor:colors.light2,
        borderWidth:0.2,
    },
    half:{
        flexDirection: 'row',
        width:'50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:colors.light2,
        borderRightWidth:0.3
    },
    halfText:{
        marginLeft:13
    }
})

