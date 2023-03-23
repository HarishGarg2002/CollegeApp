import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import colors from '../utils/colors'

const images = [
    "https://images.pexels.com/photos/9770777/pexels-photo-9770777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1439953/pexels-photo-1439953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1439953/pexels-photo-1439953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3751008/pexels-photo-3751008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
]
const {width} = Dimensions.get('window')

const ImageSwiperDiv = () => {
    return (
        <View
            style={{marginVertical:5,backgroundColor:"white"}}>
            <Text style={{marginTop:7,marginHorizontal:18,fontSize:18,marginBottom:12}}>Amazing Deals</Text>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                >
                {images.map((image,index)=>(
                    <View
                    key={index}
                    style={{width: width*0.3333, height: 200,elevation:10,marginLeft:10,paddingHorizontal:6,borderWidth:1,backgroundColor:"white", borderColor:colors.light2}}
                    >
                        <View style={{}}>
                            <Image 
                            source={{uri:image}}
                            style={{width: '100%', height:'80%'}}
                            resizeMode="cover"
                            />
                            <View style={{paddingHorizontal:10,paddingTop:2,color: 'white'}}>
                                <Text style={{fontSize:12}}>Shoes for coole</Text>
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{fontSize:13,color:"green",marginHorizontal:5}}>2000</Text>
                                    <Text style={{fontSize:13,color:"red"}}>20% off</Text>
                                </View>
                            </View>
                        </View>
                    </View>
            ))}
            </ScrollView>
        </View>
    )
}

export default ImageSwiperDiv

const styles = StyleSheet.create({})

