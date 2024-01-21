import React from "react";
import Feather from '@expo/vector-icons/Feather'
import { Alert } from "react-native";

import { 
 Container,
 BoxIcon,
 TextValue,
 ConatainerReceives,
 ButtonDelete
} from "./styles";

export default function ListLastMovements({ data, Delete }){
    
    function ConfirmationItem(){
        Alert.alert(
            'Deletar',
            'Deseja apagar esse registro?',
            [
                {
                    text: 'Não',
                    style: 'cancel'
                }, 
                {
                    text: 'Sim',
                    onPress: () => Delete(data.id)
                }
            ]
        )
    }

    return(
        <Container>
            <ConatainerReceives>
                <BoxIcon bg={ data.type } >
                    <Feather 
                    name={ data.type === 'receita' ? 'arrow-up' : 'arrow-down' } 
                    color={'#fff'} 
                    size={35} />   
                </BoxIcon>
            
                <TextValue>R${data.value}</TextValue>
            </ConatainerReceives>

            <ButtonDelete onLongPress={ ConfirmationItem }>
                <Feather name="trash-2" size={35} color={"gray"}/>
            </ButtonDelete>
        </Container>
    )
}