import React from 'react'

import { 
 Container,
 BoxUser,
 ImageLogo,
 TextWelcome,
 TextUser,
 BoxNavigation,
 ButtonPages,
 TextPages,
 ButtonLogOut,
 TextLogOut,
 BoxButtons
} from './styles';

import Header from '../../components/Header'

export default function Perfil(){
    return(
        <Container>
            <Header title='Seu perfil' />

            <BoxUser>
                
                <ImageLogo
                source={require('../../assets/do-utilizador.png')}
                />

                <TextWelcome>Seja bem vindo</TextWelcome>

                <TextUser>NICOLAS ANDREW</TextUser>

            </BoxUser>

            <BoxNavigation>

                <BoxButtons>
                    <ButtonPages>
                        <TextPages>Tela principal</TextPages>
                    </ButtonPages>

                    <ButtonPages>
                        <TextPages>Registrar </TextPages>
                    </ButtonPages>

                    <ButtonLogOut>
                        <TextLogOut>Sair</TextLogOut>
                    </ButtonLogOut>
                </BoxButtons>

            </BoxNavigation>
        </Container>
    )
}