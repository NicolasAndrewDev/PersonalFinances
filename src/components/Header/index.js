import React from "react";
import Feather from '@expo/vector-icons/Feather'

import { useNavigation } from "@react-navigation/native";

import { Container, Titulo, ButtonIcon } from "./styles";

export default function Header({ title }){
    const Navigation = useNavigation()

    return(
        <Container>
            <ButtonIcon onPress={ () => Navigation.openDrawer() }>
                <Feather name="menu" size={35}/>
            </ButtonIcon>
            <Titulo>{title}</Titulo>
        </Container>
    )
}