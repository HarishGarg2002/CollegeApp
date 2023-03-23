import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useFormikContext} from 'formik'
import colors from '../utils/colors'
import AppTextInput from './AppTextInput'

const AppFormField = ({name,...otherProps}) => {

    const {values,touched,errors,handleChange,setFieldTouched} = useFormikContext()
    return (
        <>
        <AppTextInput 
        handleChange = {handleChange(name)}
        onBlur={()=> setFieldTouched(name)}
        {...otherProps}
    />
        {touched[name] && <Text style={{color:colors.primary,fontSize:16}}>{errors[name]}</Text>}
        </>
    )
}

export default AppFormField

const styles = StyleSheet.create({})
