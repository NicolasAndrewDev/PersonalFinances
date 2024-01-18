import React, { useContext, useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather'

import { 
    Background,
    ValuesList,
    Area,
    Title,
    ListLastValues
} from "./styles";

import { format } from 'date-fns'
import { useIsFocused } from "@react-navigation/native";


import { AppContext } from "../../Context/Auth";
import api from "../../services/api";
import CardsMovements from "../../components/CardsMovements";
import Header from "../../components/Header";
import LastMovements from "../../components/LastMovements"

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
            showsHorizontalScrollIndicator={false}
            keyExtractor={ item => item.tag }
            renderItem={ ({ item }) => (<CardsMovements data={item}/>) }
            />

            <Area>
                <TouchableOpacity>
                    <Feather name='calendar' size={35} color={'#fff'} />
                </TouchableOpacity>
                <Title>Últimas movimentações</Title>
            </Area>

            <ListLastValues
            data={[]}
            vertical={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={ item => item.id }
            renderItem={ ({ item }) => (<LastMovements/>) }
            />
        </Background>
    )
}