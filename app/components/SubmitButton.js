import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useFormikContext} from 'formik'
import AppButton from './AppButton'

const SubmitButton = ({title}) => {
    const {handleSubmit} = useFormikContext()
    return (
       <AppButton onPress={handleSubmit} title={title}/>
    )
}

export default SubmitButton

const styles = StyleSheet.create({})
