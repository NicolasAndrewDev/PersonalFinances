import React, { useContext } from "react";

import AuthRoutes from "./Authentication.routes";
import AppRoutes from "./App.routes";

import { AppContext } from "../Context/Auth";

export default function Routes(){
    const { Singned } = useContext(AppContext)
    const Loading = false

    return(
        Singned ? <AppRoutes/> : <AuthRoutes/>
    )
}