import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native'
import colors from '../utils/colors'
import {MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/core'

const {width,height} = Dimensions.get('screen')

const ProductDisplayScreen = ({route}) => {
    const {name, description,image,images,originalPrice,discountedPrice=68,discountedPercentage=3,finalRating,review} = route.params
    return (
        <View style={styles.outerContainer}>
            <View style={styles.imageContainer}>
                <Image source={{uri:images[0]}} style={styles.image} resizeMode='contain'/>
            </View>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{description} </Text>
                    <View style={styles.secTextContainer}>
                        {discountedPrice && <Text style={styles.price1}>₹{originalPrice}</Text>}
                        {!discountedPrice && <Text style={styles.price2}>₹{originalPrice}</Text>}
                        {discountedPrice && <Text style={styles.price2}>₹{discountedPrice}</Text>}
                        {discountedPercentage && <Text style={styles.off}>{discountedPercentage}%off</Text>}
                    </View>
                    <Text style={styles.delivery}>₹60 Delivery Fee</Text>
                    <View style={styles.ratingContainer}>
                        {finalRating && <View style={styles.rating}>
                            <Text style={styles.ratingText}>{finalRating}</Text>
                            <FontAwesome name="star" color="white" style={styles.star}/>
                        </View>}
                        {review.length > 10 && <Text style={styles.ratingNo}>({review.length})</Text>}
                    </View>
                </View>
            </View>
            <View style={styles.sizeContainer}>
                <Text style={styles.sizeText}>Size - UK/India</Text>
                <View style={styles.sizeNumber}>
                    <View style={styles.sizeNumberInput}>
                        <Text>6</Text>
                    </View>
                    <View style={styles.sizeNumberInput}>
                        <Text>7</Text>
                    </View>
                    <View style={styles.sizeNumberInput}>
                        <Text>8</Text>
                    </View>
                    <View style={styles.sizeNumberInput}>
                        <Text>9</Text>
                    </View>
                </View>
            </View>
            <View style={styles.RatingReviewContainer}>
                <View style={styles.ratingContainer}>
                    <Text>Rating & Reviews</Text>
                    <View style={styles.ratingInsideContainer}>

                    </View>
                </View>
                <View style={styles.reviewsContainer}>
                    
                </View>
            </View>
        </View>
    )
}

export default ProductDisplayScreen

const styles = StyleSheet.create({
    imageContainer:{
        backgroundColor:"white",
    },
    image:{
        width:'100%',
        height: height*0.6   
    },
    container: {
        flexDirection: 'row',
        backgroundColor:colors.white,
        paddingTop:12,
        marginBottom:6
    },
    textContainer:{
        alignItems:'flex-start',
        fontWeight:"bold",
        paddingLeft:17,
        paddingTop:0,
        paddingBottom:10
    },
    title:{
        fontSize:17,
        color:"black",
        marginBottom:4
    },
    subtitle:{
        color:colors.gray,
        fontSize:14,
        marginBottom:6
    },
    secTextContainer:{
        flexDirection: 'row',
        marginBottom:5
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
        color:"black",
        fontSize:18,
        marginHorizontal:5
    },
    off:{
        color:"green",
        fontSize:18
    },
    ratingContainer:{
        flexDirection: 'row',
        marginTop:5,
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
    sizeContainer:{
        paddingVertical:25,
        paddingHorizontal:25,
        backgroundColor:"white",
        marginBottom:6
    },
    sizeNumber:{
        flexDirection:'row',
        marginVertical:20,
    },
    sizeNumberInput:{
        paddingVertical:3,
        paddingHorizontal:18,
        borderColor:colors.light2,
        borderWidth:0.5,
        marginHorizontal:10
    }
})
