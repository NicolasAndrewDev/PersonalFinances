import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator()

import Home from "../pages/Home";
import RegisterValues from "../pages/RegisterValues"
import Profile from "../pages/Profile"

export default function AppRoutes(){
    return(
        <Drawer.Navigator
        screenOptions={{
            headerShown: false,

            drawerStyle:{
                paddingTop: 20,
                backgroundColor: '#E2EBF2'
            },

            drawerActiveBackgroundColor: '#118AB2',
            drawerInactiveBackgroundColor: '#fff',

            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#000'
        }}
        >

            <Drawer.Screen
            name="Home"
            component={Home}
            />

            <Drawer.Screen
            name="Registrar"
            component={RegisterValues}
            />

            <Drawer.Screen
            name="Perfil"
            component={Profile}
            />

        </Drawer.Navigator>
    )
}