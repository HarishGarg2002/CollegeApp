import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView} from 'react-native'

const images = [
    "https://images.pexels.com/photos/9770777/pexels-photo-9770777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1439953/pexels-photo-1439953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1439953/pexels-photo-1439953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3751008/pexels-photo-3751008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
]

const {width} = Dimensions.get('window')
const height = width*0.6

const ImageSwiperDiv = () => {
    const [active,setActive] = useState(0)

    const change = ({nativeEvent}) =>{
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)

        if(slide != active) setActive(slide)
    }

    return (
        <View style={{width: width, height: height,marginTop:150}}>
            <ScrollView 
                pagingEnabled
                style={{width: width, height: height}}
                onScroll={change}
                showsHorizontalScrollIndicator={false}
                horizontal
                >
            {images.map((image,index)=>(
                <Image 
                source={{uri:image}}
                style={{width: width, height: height}}
                resizeMode="contain"
                key={index}
                />
            ))}
            </ScrollView>
            <View style={{flexDirection:"row",position:"absolute",bottom:0,alignSelf:"center"}}>
                {images.map((image,index)=>(
                    <Text style={index==active ? styles.activepagingText : styles.pagingText} key={index}>⬤</Text>
                ))}
            </View>
        </View>
    )
}

export default ImageSwiperDiv

const styles = StyleSheet.create({
    pagingText:{
        color: "#888",
        fontSize:16,
        marginRight:5
    },
    activepagingText:{
        color: "white",
        fontSize:16,
        marginRight:5
    },

})
