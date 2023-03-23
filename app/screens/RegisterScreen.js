import React,{useState,useContext} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
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
import { useNavigation } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(4).required().label("Password"),
    phoneNumber: Yup.number().required().label("Phone Number"),
    username: Yup.string().required().label("Username"),
})

const RegisterScreen = () => {
    const [loginerror,setLoginerror] = useState()
    const authContext = useContext(AuthContext)

    const handleRegister = async (values) => {
        const response = await api.post('/register', values)
        if(!response.ok) return setLoginerror(response.data.errmsg)

        const user = jwt_decode(response.data)
        setLoginerror(null)
        authContext.setUser(user)
        authStorage.storeToken(response.data)
    }

    const navigation = useNavigation()
    return (
       <SafeScreen style={{ backgroundColor: colors.secondary}}>
           <AppForm
               initialValues={{email:"", password:"",phoneNumber:"",username:""}}
               onSubmit={handleRegister}
               validationSchema={validationSchema}
            >
                    <Text style={{color:colors.danger,fontSize:16}}>{loginerror}</Text>
                    <AppFormField
                        placeholder="Username"
                        autoCapitalize="none"
                        autoCorrect={false}
                        name = "username"
                    />
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
                    <AppFormField
                        placeholder="Phone Number"
                        autoCorrect={false}
                        name = "phoneNumber"
                        keyboardType = "numeric"
                    />
                <SubmitButton title="Register"/>
            </AppForm>
            <Button onPress={()=> navigation.navigate('Login')} title="Login"/>
       </SafeScreen>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})
