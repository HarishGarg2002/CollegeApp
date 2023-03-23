import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native'
import CategoryInput from './CategoryInput';
import api from '../api/api'


const CategoryList = () => {

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
                horizontal
                data={categoryList}
                keyExtractor={category => category._id}
                renderItem={({item}) => 
                    <CategoryInput category={item}  type="small" onPress={()=> console.log("Hi")} />}
            />
        </View>
    )
}

export default CategoryList

const styles = StyleSheet.create({

})
