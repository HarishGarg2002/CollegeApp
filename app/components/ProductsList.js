import React,{useEffect,useState} from 'react'
import { FlatList, StyleSheet, Text, View, Animated} from 'react-native'
import ProductInput from './ProductInput'
import api from '../api/api'



const ProductsList = ({scrollY,marginY}) => {
    const [productsList,setProductsList] = useState([])
    const [error,setError] = useState()

    const getListing = async() =>{
        const response = await api.get('/product')
        if(!response.ok) return setError("Failed to load products")
        console.log(response.data.products[1].image)
        setProductsList(response.data.products)
    }

    useEffect(() => {
       getListing()

    },[])

    return (
        <Animated.View style={{
            marginTop:marginY
        }}>
        <FlatList
            numColumns={2}
            // contentContainerStyle={{flexDirection : "row", flexWrap : "wrap", justifyContent:"space-evenly" }}
            data={productsList}
            keyExtractor={product => product.id}
            onScroll={(e) => scrollY.setValue(e.nativeEvent.contentOffset.y)}
            renderItem={({item})=>
                <ProductInput product={item}/>}
        />
        </Animated.View>
    )
}

export default ProductsList

const styles = StyleSheet.create({
})
