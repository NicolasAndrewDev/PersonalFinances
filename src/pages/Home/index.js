import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

import { AppContext } from "../../Context/Auth";
import Header from "../../components/Header";

import { 
    Background
 } from "./styles";

export default function Home(){
    return(
        <Background>
            <Header title='Minhas movimentações'/>
        </Background>
    )
}