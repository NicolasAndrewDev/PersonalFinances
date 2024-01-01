import React, { useContext, useState } from "react";
import { Platform, ActivityIndicator } from 'react-native'
import { useNavigation } from "@react-navigation/native";

import { 
    Background,
    Container,
    Logo,
    AreaInput,
    Input,
    RegButtton,
    TextRegButton
} from './styles'

import { AppContext } from "../../Context/Auth";

export default function SingUp(){
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const {SingUp, loadingAuth} = useContext(AppContext)

    function GetData(){
            SingUp(name, password, email)
    }

    return(
        <Background>
            <Container
            Behavior={ Platform.OS === 'ios' ? 'padding' : '' }
            enabled
            >

                <Logo
                source={require('../../assets/money-cadastro.png')}
                />

                <AreaInput>
                    <Input
                    placeholder="Digite seu nome..."
                    value={name}
                    onChangeText={ (text) => setName(text) }
                    />
                </AreaInput>

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

                <RegButtton onPress={GetData} >
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={25} color={'#fff'} />
                        ) : (
                            <TextRegButton>Cadastrar</TextRegButton>
                        )
                    }
                </RegButtton>

            </Container>
        </Background>
    )
}