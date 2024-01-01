import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingIn from '../pages/SingIn'
import SingUp from '../pages/SingUp'

const StackNavigator = createNativeStackNavigator()

export default function AuthRoutes(){
    return(
        <StackNavigator.Navigator>

            <StackNavigator.Screen
            name="SingIn"
            component={SingIn}
            options={{
                headerShown: false
            }}
            />

            <StackNavigator.Screen
            name="SingUp"
            component={SingUp}
            options={{
                headerStyle:{
                    backgroundColor: '#EF476F',
                    borderBottomWidth: 1,
                    booderBottomColor: '#118AB2'
                },
                headerTintColor: '#fff',
                headerTitle: 'Voltar',
                headerBackTitleVisible: false
            }}
            />

        </StackNavigator.Navigator>
    )
}