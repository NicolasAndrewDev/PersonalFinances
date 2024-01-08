import React, { useContext, useState, useEffect } from "react";

import { AppContext } from "../../Context/Auth";
import Header from "../../components/Header";

import { 
    Background,
    ValuesList
 } from "./styles";

import { format } from 'date-fns'

import api from "../../services/api";

import { useIsFocused } from "@react-navigation/native";
import CardsMovements from "../../components/CardsMovements";

export default function Home(){
    const isFocused = useIsFocused()

    const [dateMovements, setDateMovements] = useState(new Date())
    const [listMovements, setListMovements] = useState([])

    useEffect(() => {
        let isActive = true

        async function getMovements(){
            let DateFormated = format(dateMovements, 'dd/MM/yyyy')

            const balance = await api.get('/balance', {
                params:{
                    date: DateFormated
                }
            })

            if(isActive){
                setListMovements(balance.data)
            }
        }

        getMovements()

        return () => isActive = false;
    }, [isFocused])

    return(
        <Background>
            <Header title='Minhas movimentações'/>

            <ValuesList
            data={listMovements}
            horizontal={true}
            showHorizontalScrollIndicator={false}
            keyExtractor={ item => item.tag }
            renderItem={ ({ item }) => (<CardsMovements data={item}/>) }
            />
        </Background>
    )
}