import React, { useState } from "react";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { 
Background,
Input,
ButtonRegister,
TextButtonRegister
} from './styles'

import Header from '../../components/Header'
import RegisterTypes from '../../components/RegisterTypes'
import api from '../../services/api'

import { format } from "date-fns";

export default function Register(){
    const navigation = useNavigation()

    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [type, setType] = useState('receita')

    function AddValues(){
        Keyboard.dismiss()

        if(isNaN(parseFloat(value)) || type === null){
            alert('Por favor preencha todos os campos de forma correta :)')
            return;
        }

        Alert.alert(
            'Confirmando registro',
            `Tipo: ${type} - Valor: ${parseFloat(value)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Confirmar',
                    onPress: () => AddValueInCards()
                }
            ]
        )
    }

    async function AddValueInCards(){
            Keyboard.dismiss()

            const response = await api.post('/receive', {
                description: description,
                value: Number(value),
                type: type,
                date: format(new Date(), 'dd/MM/yyyy')
            })

            setDescription('')
            setValue('')

            navigation.navigate('Home')
    }

    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
        <Background>
            <Header title={'Registrando'} />

            <SafeAreaView style={{ alignItems: 'center', marginTop: 25, gap: 15 }}>

                <Input
                placeholder='Descrição do resgistro'
                value={ description }
                onChangeText={ (text) => setDescription(text)}
                />

                <Input
                placeholder='Valor'
                keyboardType='numeric'
                value={ value }
                onChangeText={ (text) => setValue(text)}
                />

                <RegisterTypes  typeValue={type}  sendTypeChanged={ (item) => setType(item) } />

                <ButtonRegister onPress={ () => AddValues() } >
                    <TextButtonRegister>Registrar</TextButtonRegister>
                </ButtonRegister>

            </SafeAreaView>
        </Background>
        </TouchableWithoutFeedback>
    )
}