import React, { useMemo } from "react";
import { 
    Container,
    Label,
    Value
 } from "./styles";

export default function CardsMovements({ data }){
    
    const LabelName = useMemo(() => {
        if(data.tag === 'saldo'){
            return{
                name: 'Saldo atual',
                color: '073B4C'
            }
        } else if(data.tag === 'receita'){
            return{
                name: 'Entradas de hoje',
                color: '06D6A0'
            }
        } else{
            return{
                name: 'Despesas de hoje',
                color: 'EF476F'
            }
        }
    }, [data])

    return(
        <Container bg={LabelName.color}>
            <Label>{LabelName.name}</Label>
            <Value>R${data.saldo}</Value>
        </Container>
    )
}