import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator()

import Home from "../pages/Home";

export default function AppRoutes(){
    return(
        <Drawer.Navigator
        screenOptions={{
            headerShown: false,

            drawerStyle:{
                paddingTop: 20,
                backgroundColor: '#118AB2'
            },

            drawerActiveBackgroundColor: '#EF476F',
            drawerInactiveBackgroundColor: '#fff',

            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#000'
        }}
        >

            <Drawer.Screen
            name="Home"
            component={Home}
            />

        </Drawer.Navigator>
    )
}