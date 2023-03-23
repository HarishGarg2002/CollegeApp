import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import CategoryList from '../components/CategoryList';
import ImageSwiper from '../components/ImageSwiper';
import ProductInput from '../components/ProductInput';
import SafeScreen from '../components/SafeScreen';
import SearchInput from '../components/SearchInput';
import SearchProducts from '../components/SearchProducts';
import CategoryInput from './../components/CategoryInput';
import HomeHeader from './../components/HomeHeader';
import ProductsList from './../components/ProductsList';

const ProductsScreen = () => {


    return (
        <SafeScreen>
            
            <ProductsList />
            <ImageSwiper/>
        </SafeScreen>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({})
