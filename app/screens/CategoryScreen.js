import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native'
import CategoryInput from '../components/CategoryInput';
import api from '../api/api'

const CategoryScreen = () => {

    const [categoryList,setCategoryList] = useState([])
    const [error,setError] = useState()

    const loadCategories = async() => {
        const response = await api.get('/category')

        if(!response.ok) return setError("Failed to load Categories,Please retry")

        setCategoryList(response.data.categories)
    }

    useEffect(() => {
        loadCategories()
    },[])

    return (
        <View style={styles.container}>
        <FlatList
            numColumns={3}
            data={categoryList}
            keyExtractor={category => category._id}
            renderItem={({item}) => <CategoryInput category={item}  type="large" onPress={()=> console.log("Hi")} />}
        />
    </View>
    )
}

export default CategoryScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        // paddingRight:1,
        // justifyContent: "center",
        alignItems: "center",
        paddingLeft:4
    }
})
