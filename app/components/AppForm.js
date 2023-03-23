import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Formik } from 'formik'
const AppForm = ({initialValues,onSubmit,validationSchema,children}) => {
    return (
        <Formik
               initialValues={initialValues}
               onSubmit={onSubmit}
               validationSchema={validationSchema}
        >
        {({values,touched,errors,handleChange,setFieldTouched}) =>(
            <>
            {children}
            </>
        )}
        </Formik>
    )
}

export default AppForm

const styles = StyleSheet.create({})
