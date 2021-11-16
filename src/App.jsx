import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Routers";
import Header from "./components/Header/Header";
import { getAuth } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from './store/reducers/Auth';

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getAuth().onAuthStateChanged((user) => {
            if(user) {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    isAuth: true
                }))
            }
          });
    }, [])
    return (
        <BrowserRouter>
            <Header />
            <Routers />
        </BrowserRouter>
    )
}

export default App