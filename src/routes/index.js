import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./Authentication.routes";
import AppRoutes from "./App.routes";

import { AppContext } from "../Context/Auth";

export default function Routes(){
    const { Singned, loading } = useContext(AppContext)

    if(loading){
        return(
            <View 
            style={{ 
             flex: 1,
             justifyContent: 'center', 
             alignItems: 'center',
             backgroundColor: '#118AB2' 
             }}>
                <ActivityIndicator size={"large"} color={'#fff'} />
            </View>
        )
    }

    return(
        Singned ? <AppRoutes/> : <AuthRoutes/>
    )
}