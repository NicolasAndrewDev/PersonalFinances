import React, { useState } from "react";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";

import { 
Background,
Input,
ButtonRegister,
TextButtonRegister
} from './styles'

import Header from '../../components/Header'

export default function Register(){
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [type, setType] = useState('receita')

    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
        <Background>
            <Header title={'Registrando'} />

            <SafeAreaView style={{ alignItems: 'center', marginTop: 25, gap: 15 }}>

                <Input
                placeholder='Descrição do resgistro'
                value={ description }
                onChangeTetx={ (text) => setDescription(text)}
                />

                <Input
                placeholder='Valor'
                keyboardType='numeric'
                value={ value }
                onChangeTetx={ (text) => setValue(text)}
                />

                <ButtonRegister>
                    <TextButtonRegister>Registrar</TextButtonRegister>
                </ButtonRegister>

            </SafeAreaView>
        </Background>
        </TouchableWithoutFeedback>
    )
}