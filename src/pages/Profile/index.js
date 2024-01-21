import React, { useContext } from 'react'
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

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
import { AppContext } from '../../Context/Auth';

export default function Perfil(){
    const Navigation = useNavigation()
    const { LogOut, user } = useContext(AppContext)

    function Exit(){
        Alert.alert(
            'Deslogar',
            'Tem certeza que deseja deslogar?',
            [
                {
                    text: 'não',
                    style: 'cancel'
                },
                {
                    text: 'sim',
                    onPress: () => LogOut()
                }
            ]
        )
    }

    return(
        <Container>
            <Header title='Seu perfil' />

            <BoxUser>
                
                <ImageLogo
                source={require('../../assets/do-utilizador.png')}
                />

                <TextWelcome>Seja bem vindo</TextWelcome>

                <TextUser>{user.name}</TextUser>

            </BoxUser>

            <BoxNavigation>

                <BoxButtons>
                    <ButtonPages onPress={ () => Navigation.navigate('Home') } >
                        <TextPages>Tela principal</TextPages>
                    </ButtonPages>

                    <ButtonPages onPress={ () => Navigation.navigate('Registrar') } >
                        <TextPages>Registrar </TextPages>
                    </ButtonPages>

                    <ButtonLogOut onPress={ Exit } >
                        <TextLogOut>Sair</TextLogOut>
                    </ButtonLogOut>
                </BoxButtons>

            </BoxNavigation>
        </Container>
    )
}