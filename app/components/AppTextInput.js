import React from 'react'
import { StyleSheet, Text, View ,TextInput} from 'react-native'
import colors from '../utils/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const AppTextInput = ({icon,handleChange,...props}) => {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons icon={icon} color="#fff" size={20}/>}
            <TextInput style={styles.input} onChangeText={handleChange} {...props} />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        borderRadius: 15,
        paddingLeft:50,
        flexDirection: "row",
        paddingVertical:10,
        width:"100%",
        marginVertical:10,
    },
    input:{
        fontSize:20,
        flex:1,
    }
})
