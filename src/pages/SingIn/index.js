import React, { useContext, useState } from "react";
import { Platform, ActivityIndicator } from 'react-native'

import { 
    Background,
    Container,
    Logo,
    AreaInput,
    Input,
    LogButtton,
    TextLogButton,
    RegisterPageButton,
    TextPageButton
} from './styles'

import { useNavigation } from "@react-navigation/native";

import { AppContext } from "../../Context/Auth";

export default function SingIn(){
    const Navigation = useNavigation()
    const { SingIn, loadingAuth } = useContext(AppContext)

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    function LogUser(){
        SingIn(email, password)
    }

    return(
        <Background>
            <Container
            Behavior={ Platform.OS === 'ios' ? 'padding' : '' }
            enabled
            >

                <Logo
                source={require('../../assets/icone-money.png')}
                />

                <AreaInput>
                    <Input
                    placeholder="Digite seu email..."
                    value={email}
                    onChangeText={ (text) => setEmail(text) }
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                    placeholder="Digite sua senha..."
                    value={password}
                    onChangeText={ (text) => setPassword(text) }
                    secureTextEntry={true}
                    />
                </AreaInput>

                <LogButtton onPress={ LogUser }>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={25} color={'#FFF'} />
                        ) : (
                            <TextLogButton>Logar</TextLogButton>
                        )
                    }
                </LogButtton>

                <RegisterPageButton onPress={ () => Navigation.navigate('SingUp') }>
                    <TextPageButton>Clique aqui para criar uma conta!</TextPageButton>
                </RegisterPageButton>

            </Container>
        </Background>
    )
}
