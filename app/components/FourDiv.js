import React from 'react'
import { StyleSheet, Text, View, Dimensions, ImageBackground, FlatList, Image} from 'react-native'
import colors from '../utils/colors'

const {width,height} = Dimensions.get('screen')

const FourDivList = [
    {
        image:"https://images.pexels.com/photos/9770777/pexels-photo-9770777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title:"Libas,Varanga",
        subtitle:"Min 65% off"
    },
    {
        image:"https://images.pexels.com/photos/9770777/pexels-photo-9770777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title:"Libas,Varanga",
        subtitle:"Min 65% off"
    },
    {
        image:"https://images.pexels.com/photos/9770777/pexels-photo-9770777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title:"Libas,Varanga",
        subtitle:"Min 65% off"
    },
    {
        image:"https://images.pexels.com/photos/9770777/pexels-photo-9770777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title:"Libas,Varanga",
        subtitle:"Min 65% off"
    },
]

const FourDiv = ({data}) => {
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%',marginVertical:5}}>
            <Text style={styles.heading}>Todays Fashion Deals</Text>
            <View style={styles.outerContainer}>
            <FlatList
                data={FourDivList}
                numColumns={2}
                renderItem={({item,index}) =>{

                    // const {tags,brands,name} = item
                    // // console.log(item._id)
                    // let itemname,itemimage
                    // itemname = tags && tags.toString().replace(","," ")
                    // itemname = brands && brands.toString()
                    // itemname = name
                    
                    // itemimage = item.products[0].image

                    return (
                    <View key={index} style={styles.container}>
                        <Image source={require('../assets/cart.jpg')} style={styles.image} resizeMode="cover"/>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.subtitle}>Hello, How are you</Text>
                        </View>
                    </View>
                    )
                }}
            />
            </View>
        </ImageBackground>
    )
}

export default FourDiv

const styles = StyleSheet.create({
    heading:{
        color:colors.white,
        fontSize:19,
        fontWeight:"bold",
        marginTop:12,
        marginBottom:15,
        marginHorizontal:20
    },
    outerContainer:{
        borderTopColor:colors.white,
        borderTopWidth:1,
        paddingTop:9,
        paddingBottom:6,
        justifyContent:"space-around",
        alignItems: "center"
    },
    container:{
        backgroundColor:colors.white,
        width:'46%',
        marginBottom:8,
        marginHorizontal:5,
        height:height*0.21,
        paddingTop:6,
        paddingBottom:4,
        alignItems: 'center'
    },
    image:{
        width:'75%',
        height:'77%'
    },
    textContainer:{
        alignSelf:"flex-start",
        paddingLeft:10,
        paddingTop:2
    },
    subtitle:{
        color:"green",
    }

})

