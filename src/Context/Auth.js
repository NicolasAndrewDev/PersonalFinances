import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const AppContext = createContext({})

import api from "../services/api";

export default function AuthContext({children}){
    const Navigation = useNavigation()

    const [user, setUser] = useState(null)
    const [loadingAuth, setLoudingAuth] = useState(null)

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
        console.log('Funcionou, estamos logados')
    }
    // LOGANDO UM USUARIO -------------------------------------------------------------------

    return(
        <AppContext.Provider value={{ Singned: !!user ,user, SingUp, SingIn, loadingAuth }}>
            {children}
        </AppContext.Provider>
    )
}