import React,{useContext,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../utils/colors';
import SafeScreen from './../components/SafeScreen';
import * as Yup from 'yup'
import AppFormField from './../components/AppFormField';
import AppForm from '../components/AppForm'
import SubmitButton from './../components/SubmitButton';
import api from '../api/api'
import AuthContext from '../auth/AuthContext'
import jwt_decode from 'jwt-decode'
import authStorage from '../auth/storage'

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(4).required().label("Password"),
})

const LogInScreen = () => {
    const [loginerror,setLoginerror] = useState()
    const authContext = useContext(AuthContext)

    const handleSubmit = async(values) => {
        const response = await api.post('/login',values)

        if(!response.ok) return setLoginerror(response.data.errmsg)

        const user = jwt_decode(response.data)

        authContext.setUser(user)
        authStorage.storeToken(response.data)
    }

    return (
       <SafeScreen style={{ backgroundColor: colors.secondary}}>
           <AppForm
               initialValues={{email:"", password:""}}
               onSubmit={handleSubmit}
               validationSchema={validationSchema}
            >
                    <Text style={{color:colors.danger,fontSize:16}}>{loginerror}</Text>
                    <AppFormField
                        placeholder="Email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        name = "email"
                        keyboardType = "email-address"
                        textContentType = "emailAddress"
                    />
                    
                    <AppFormField
                        placeholder="Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        name = "password"
                        secureTextEntry
                        textContentType = "password"
                    />
                <SubmitButton title="Login"/>
            </AppForm>
           
       </SafeScreen>
    )
}

export default LogInScreen

const styles = StyleSheet.create({})
