import * as SecureStore from 'expo-secure-store'

const key = "accessToken" 

const storeToken = async(token) => {
    try{
    SecureStore.setItemAsync(key,token)
    }
    catch(err){
        console.log("Error storing the auth token")
    }
}

const getToken = async(token) => {
    try{
        return SecureStore.getItemAsync(key)
    }
    catch(err){
        console.log("Error getting the auth token")
    }
}

const deleteToken = async(token) => {
    try{
        SecureStore.deleteItemAsync(key)
    }
    catch(err){
        console.log("Error deleting the auth token")
    }
}

export default {
    storeToken,
    getToken,
    deleteToken,
}