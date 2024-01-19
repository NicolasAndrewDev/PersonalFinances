import React from "react";
import Feather from '@expo/vector-icons/Feather'

import { 
 Container,
 BoxIcon,
 TextValue
} from "./styles";

export default function ListLastMovements({ data }){
    return(
        <Container>
            <BoxIcon bg={ data.type } >
               <Feather 
               name={ data.type === 'receita' ? 'arrow-up' : 'arrow-down' } 
               color={'#fff'} 
               size={35} />   
            </BoxIcon>

            <TextValue>R${data.value}</TextValue>
        </Container>
    )
}