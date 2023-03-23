import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import MyCartInput from '../components/MyCartInput'

const MyCartScreen = () => {

    const cartList = [
        {
            id:1,
        },
        {
            id:2,
        },
        {
            id:3,
        }
    ]

    return (
        <View>
            <FlatList
            data={cartList}
            keyExtractor={category => category.id}
            renderItem={({item}) => <MyCartInput onPress={()=> console.log("Hi")} />}
        />
        </View>
    )
}

export default MyCartScreen

const styles = StyleSheet.create({})
