import React from 'react';
import {UserLogin} from "./components/UserForm/UserLogin";
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {UserRegister} from "./components/UserForm/UserRegister";
import {CookiesProvider} from "react-cookie";
import {HomePage} from "./components/HomePage/HomePage";

export const App = () => {
    return (
        <div>
            <CookiesProvider>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/register" element={<UserRegister/>}/>
                </Routes>
            </CookiesProvider>
        </div>
    )
}

