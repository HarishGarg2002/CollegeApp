import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View, Animated, ScrollView, Button} from 'react-native'
import ImageSwiperDiv from '../components/ImageSwiperDiv'
import ImageSwiper from '../components/ImageSwiper'
import FourDiv from '../components/FourDiv'
import SafeScreen from '../components/SafeScreen'
import HomeHeader from './../components/HomeHeader'
import { StatusBar } from 'expo-status-bar';
import api from '../api/api'
import ProductsList from './../components/ProductsList';
import ProductsScreen from './ProductsScreen.'

const HomeScreen = () => {

    const scrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(scrollY,0,45)
    const translateY = diffClamp.interpolate({
        inputRange:[0,45],
        outputRange:[0,-45]
    })
    const opacityY = diffClamp.interpolate({
        inputRange:[0,45],
        outputRange:[1,0]
    })
    const heightY = diffClamp.interpolate({
        inputRange:[0,1],
        outputRange:[45,0]
    })
    // const marginY= diffClamp.interpolate({
    //     inputRange:[0,55],
    //     outputRange:[130,100]
    // })
    const [bannerImages,setBannerImages] = useState([])
    const [order,setOrder] = useState([])
    const [cart,setCart] = useState([])
    const [products,setProducts] = useState([])

    const getHomeData = async() =>{
        let response = await api.get('/home')
        const data = response.data.home
        
        data.map(async dat =>{
            // console.log(dat)
            switch(dat.name){
                case 'orders':
                    response = await api.get('/home/orders')
                    setOrder(response.data.products)
                    break
                
                case 'cart':
                    response = await api.get('/home/cart')
                    setCart(response.data.products)
                    break

                case 'products':
                    // console.log(dat._id)
                    response = await api.get(`/home/products/${dat._id}`)
                    // console.log(response.data)
                    console.log("new                inmnd      discountedPrice     is    ")
                    setProducts([products,...response.data])
                    console.log(products)
                    
            }
        })
    }

    const getBannerImages = async() =>{
        const response = await api.get('/home/imagesbanner')
        const images = response.data.images.images
        console.log(images)
        setBannerImages(images)
    }

    const logout = async() =>{
        const response = await api.post('/')
    }

    useEffect(()=> {
        getBannerImages(),
        getHomeData()
    },[])

    return (
        <SafeScreen> 
            <HomeHeader opacityY={opacityY} heightY={heightY} translateY={translateY} />
            <ScrollView
                onScroll={(e) => scrollY.setValue(e.nativeEvent.contentOffset.y)}    
            >
                <ImageSwiper images={bannerImages}/>
                {/* {products.map((product) => {


                    return <FourDiv data={product} />
                })} */}
                <ImageSwiperDiv/>
                <ProductsList/>
                <FourDiv/>
                {/* <Button onPress={logout}/> */}
                <ProductsScreen/>
            </ScrollView>
        </SafeScreen>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
