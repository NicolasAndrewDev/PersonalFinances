import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator()

import Home from "../pages/Home";

export default function AppRoutes(){
    return(
        <Drawer.Navigator>

            <Drawer.Screen
            name="Home"
            component={Home}
            />

        </Drawer.Navigator>
    )
}