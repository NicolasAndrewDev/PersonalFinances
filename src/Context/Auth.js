import React, { createContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"

export const AppContext = createContext({})

import api from "../services/api";

export default function AuthContext({children}){
    const Navigation = useNavigation()

    const [user, setUser] = useState(null)
    const [loadingAuth, setLoudingAuth] = useState(null)
    const [loading, setLoading] = useState(true)

    // MANTENDO USUARIO LOGADO

    useEffect(() => {
        async function LoadStorage(){
            const StorageUser = await AsyncStorage.getItem('@FinanceToken')

            if(StorageUser){

                const response = await api.get('/me', {
                    headers:{
                        'Authorization': `Bearer ${StorageUser}`
                    }
                }) 
                .catch(() => {
                    setUser(null)
                })

                api.defaults.headers['Authorization'] = `Bearer ${StorageUser}`
                setUser(response.data)

                setLoading(false)
                
            }

            setLoading(false)
        }

        LoadStorage()
    }, [])

    // MANTENDO USUARIO LOGADO

    // CADASTRANDO UM USUARIO ----------------------------------------------------------
    async function SingUp(name, password, email){
        if(name === '' || password === '' || email === ''){
            alert('Todos os campos são obrigatórios :)')
            return
        }

        setLoudingAuth(true)

        try{
            const response = await api.post('/users', {
                name: name,
                password: password,
                email: email
            })
            setLoudingAuth(false)

            Navigation.goBack()
        } 
        catch(err){
            console.log('Conseguimos localizar um erro:', err)
            setLoudingAuth(false)
        }
    }
    // CADASTRANDO UM USUARIO ---------------------------------------------------------------

    // LOGANDO UM USUARIO -------------------------------------------------------------------
    async function SingIn(email, password){
        if(password === '' || email === ''){
            alert('Todos os campos são obrigatórios :)')
            return
        }

        setLoudingAuth(true)

        try{
            const response = await api.post('/login', {
                email: email,
                password: password
            })
            
            const { token, name, id } = response.data;

            const data = {
                email,
                name,
                id,
                token,
            }

            await AsyncStorage.setItem('@FinanceToken', token)

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            setUser({
                email,
                name,
                id,
            })

            setLoudingAuth(false)
        }
        catch(err){
            console.log('Conseguimos localizar um erro:', err)
            setLoudingAuth(false)
        }
    }
    // LOGANDO UM USUARIO -------------------------------------------------------------------

    return(
        <AppContext.Provider value={{ Singned: !!user ,user, SingUp, SingIn, loadingAuth, loading }}>
            {children}
        </AppContext.Provider>
    )
}