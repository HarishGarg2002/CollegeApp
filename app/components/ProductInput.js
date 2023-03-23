import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native'
import colors from '../utils/colors'
import {MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/core'

const {width,height} = Dimensions.get('screen')

const ProductInput = ({product}) => {
    const {name, description,image,originalPrice,discountedPrice=68,discountedPercentage=3,finalRating,review} = product
    const navigation = useNavigation()
    return (
    <TouchableOpacity onPress={() => navigation.navigate('Product',product)}>
        <View style={styles.container}>
            <Image source={{uri:image}} style={styles.image} resizeMode='contain'/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{description} </Text>
                <View style={styles.secTextContainer}>
                    {discountedPrice && <Text style={styles.price1}>₹{originalPrice}</Text>}
                    {!discountedPrice && <Text style={styles.price2}>₹{originalPrice}</Text>}
                    {discountedPrice && <Text style={styles.price2}>₹{discountedPrice}</Text>}
                    {discountedPercentage && <Text style={styles.off}>{discountedPercentage}% off</Text>}
                </View>
                <View style={styles.bottomContainer}>
                    {finalRating && <View style={styles.rating}>
                        <Text style={styles.ratingText}>{finalRating}</Text>
                        <FontAwesome name="star" color="white" style={styles.star}/>
                    </View>}
                    {!(review.length<10) && <Text style={styles.ratingNo}>({review.length})</Text>}
                </View>
            </View>
        </View>
    </TouchableOpacity>
    )
}

export default ProductInput

const styles = StyleSheet.create({    
container:{
    width:width*0.5,
    height:height*0.29,
    backgroundColor:colors.white,
    overflow:'hidden',
    borderColor:colors.light1,
    borderWidth:1,
    // marginBottom:12
},
image:{
    width:'100%',
    height:height*0.18,
    // alignSelf: 'center',
},
textContainer:{
    alignItems:'flex-start',
    fontWeight:"bold",
    paddingLeft:8,
    paddingTop:0,
},
title:{
    fontSize:17,
    color:"black"
},
subtitle:{
    color:colors.gray,
    fontSize:14
},
secTextContainer:{
    flexDirection: 'row'
},
price1:{
    color:colors.gray,
    textDecorationLine:'line-through',
    fontSize:15
},
price2:{
    color:"black",
    fontSize:16,
    fontWeight:"bold",
    marginHorizontal:5
},
off:{
    color:"green",
    fontSize:16
},
bottomContainer:{
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
},
ratingNo:{
    marginLeft:13
}
})
