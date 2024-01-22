import React, { useContext } from "react";
import { Image, View, Text } from "react-native";

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { AppContext } from "../../Context/Auth"; 

export default function DrawerCustom(props){
    const { user, LogOut } = useContext(AppContext)

    return(
        <DrawerContentScrollView { ...props }>

            <View style={{ alignItems: 'center', marginBottom: 8, marginTop: 8 }}>
                <Image
                source={ require('../../assets/money-cadastro.png') }
                style={{ width: 90, height: 90 }}
                />

                <Text style={{ fontSize: 19, marginTop: 9 }} >
                    Bem vindo(a)
                </Text>

                <Text 
                style={{  fontWeight: 'bold', fontSize: 20, paddingHorizontal: 10 }}
                numberOfLines={1}
                >
                    { user && user.name }
                </Text>
            </View>

            <DrawerItemList { ...props }/>

            <DrawerItem
            {...props}
            label="Sair do app"
            onPress={ () => LogOut() }
            />
        </DrawerContentScrollView>
    )
}