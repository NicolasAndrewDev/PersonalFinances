import React, { useContext, useState, useEffect } from "react";
import { TouchableOpacity, Modal } from "react-native";
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


import api from "../../services/api";
import CardsMovements from "../../components/CardsMovements";
import Header from "../../components/Header";
import LastMovements from "../../components/LastMovements"
import ModalCalendar from "../../components/ModalCalendar"

export default function Home(){
    const isFocused = useIsFocused()

    const [dateMovements, setDateMovements] = useState(new Date())
    const [listMovements, setListMovements] = useState([])
    const [movements, setMovements] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        let isActive = true

        async function getMovements(){
            let day = new Date(dateMovements)
            let onlyDay = day.valueOf() + day.getTimezoneOffset() * 60 * 1000;
            let DateFormated = format(onlyDay, 'dd/MM/yyyy')

            console.log(DateFormated)

            const receive = await api.get('/receives', {
                params:{
                    date: DateFormated
                }
            })

            const balance = await api.get('/balance', {
                params:{
                    date: DateFormated
                }
            })

            if(isActive){
                setMovements(receive.data)
                setListMovements(balance.data)
            }
        }

        getMovements()

        return () => isActive = false;
    }, [isFocused, dateMovements])

    async function DeleteItem(id){
        
        try{
            const response = await api.delete('/receives/delete', {
                params:{
                    item_id: id
                }
            })
            setDateMovements(new Date())
        }catch(err){
            console.log(err)
        }
    }

    function FilterMovementsDay(NewDay){
        setDateMovements(NewDay)
    }

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
                <TouchableOpacity onPress={ () => setModalVisible(true) }>
                    <Feather name='calendar' size={35} color={'#fff'} />
                </TouchableOpacity>
                <Title>Últimas movimentações</Title>
            </Area>

            <ListLastValues
            data={movements}
            vertical={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={ item => item.id }
            renderItem={ ({ item }) => (<LastMovements data={item} Delete={ DeleteItem }  />) }
            />

            <Modal visible={modalVisible} animationType="fade" transparent={true} >
                <ModalCalendar 
                setVisible={ () => setModalVisible(false)}
                Filter={FilterMovementsDay}
                />
            </Modal>
        </Background>
    )
}