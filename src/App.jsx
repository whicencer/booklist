import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Routers";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routers />
        </BrowserRouter>
    )
}

export default App