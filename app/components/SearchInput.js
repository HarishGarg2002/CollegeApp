import { MaterialCommunityIcons } from '@expo/vector-icons'
import React,{useState,useRef} from 'react'
import { StyleSheet, Text, View, TextInput, Modal} from 'react-native'
import colors from '../utils/colors'
import SearchProductsInput from './SearchProductsInput'

const SearchInput = () => {
    const [show,setShow] = useState(false)
    const [input,setInput] = useState(false)
    const inputRef = useRef()
    

    return (
        <>
        <View style={styles.outerContainer}>
        <View style={styles.container}>

            <MaterialCommunityIcons name="magnify" color={colors.medium} size={20}/>
            <TextInput ref={inputRef} style={styles.input} onPressIn={() => setShow(true)} placeholder="  Search for Products,Brands and More"/>
        </View>
            <MaterialCommunityIcons name="microphone" color="#047BD5" size={20} style={styles.icon}/>
        </View>
        <Modal visible={show} animationType="slide" style={{flex:1}} onRequestClose={() => {setShow(false),inputRef.current.blur(),setInput(null)}}>
        <View style={[styles.outerContainer]}>
        <View style={styles.container}>
            <MaterialCommunityIcons name="magnify" color={colors.medium} size={20}/>
            <TextInput style={styles.input} autoFocus onChangeText={(text)=>setInput(text)} placeholder="  Search for Products,Brands and More" onPressIn={()=>inputRef.current.blur()}/>
        </View>
            <MaterialCommunityIcons name="microphone" color="black" size={20} style={[styles.icon,{backgroundColor:"white"}]}/>
        </View>
            <SearchProductsInput/>
        </Modal> 
        </>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    outerContainer:{
        flexDirection:"row",
        marginHorizontal:0,
        alignItems: "center",
    },
    container: {
        width:'93%',
        flexDirection:"row",
        alignItems:'center',
        paddingVertical:6,
        paddingLeft:12,
        backgroundColor:colors.white,
        borderRadius:3,
    },
    input:{
        flex: 1,
        fontSize:16,
    },
    icon:{
        backgroundColor:"#ADD8E6",
        paddingVertical:9,
        paddingHorizontal:4,
        borderRadius:2
    }
})
