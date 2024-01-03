import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

import { AppContext } from "../../Context/Auth";

export default function Home(){
    const { LogOut, user } = useContext(AppContext)

    return(
        <View>
            <Text>TELA HOME</Text>
            <Text>nome: {user.name}</Text>
            <Button
            title="deslogar"
            onPress={ LogOut }
            />
        </View>
    )
}