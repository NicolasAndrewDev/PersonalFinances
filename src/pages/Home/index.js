import React, { useContext, useState, useEffect } from "react";

import { AppContext } from "../../Context/Auth";
import Header from "../../components/Header";

import { 
    Background
 } from "./styles";

import { format } from 'date-fns'

import api from "../../services/api";

export default function Home(){
    
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
    }, [])

    return(
        <Background>
            <Header title='Minhas movimentações'/>
        </Background>
    )
}