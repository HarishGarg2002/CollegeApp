import React from 'react'
import { StyleSheet, Text, View ,TouchableHighlight } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../utils/colors';

const AppButton = ({icon,title,color="primary",onPress,style}) => {
    return (
        <TouchableHighlight style={styles.outerContainer} onPress={onPress}>
            <View style={[styles.container,{backgroundColor:colors[color]},style]}>
                {icon?<MaterialCommunityIcons
                  name={icon}
                  color={colors.white}
                  size={20}  
                />:null}
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default AppButton

const styles = StyleSheet.create({
    outerContainer:{
        width:'100%'
    },
    container:{
        width:'100%',
        padding:12,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:15,
        flexDirection:"row"
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:colors.white,
        marginLeft:10,
        marginLeft:20
    }
})
