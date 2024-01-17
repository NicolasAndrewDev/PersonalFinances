import React, {useState} from "react";
import Feather from '@expo/vector-icons/Feather'

import { 
 Container,
 TextButtonType,
 ButtonType
 } from './styles'

export default function ButtonsType({ typeValue, sendTypeChanged }){
    const [sendType, setSendType] = useState(typeValue)

    function ChangeValue(name){
            if(name === 'receita'){
                setSendType('receita')
                sendTypeChanged('receita')
            } else {
                setSendType('despesa')
                sendTypeChanged('despesa')
            }
    }

    return(
        <Container>
            <ButtonType
            checked={ sendType === 'receita' ? true : false }
            onPress={ () => ChangeValue('receita') }
            >
                <Feather name="arrow-up"  size={25} color={'#000'} />
                <TextButtonType>Receita</TextButtonType>
            </ButtonType>

            <ButtonType
            checked={ sendType === 'despesa' ? true : false }
            onPress={ () => ChangeValue('despesa') }
            >
                <Feather name="arrow-down"  size={25} color={'#000'} />
                <TextButtonType>Despesa</TextButtonType>
            </ButtonType>
        </Container>
    )
}