import React from 'react';
import {Route, Routes} from "react-router-dom";
import {UserRegister} from "./components/UserForm/UserRegister";
import {CookiesProvider} from "react-cookie";
import {HomePage} from "./components/HomePage/HomePage";
import {Archives} from "./components/Archives/Archives";

export const App = () => {
    return (
        <div>
            <CookiesProvider>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/register" element={<UserRegister/>}/>
                    <Route path="/archives" element={<Archives/>}/>
                </Routes>
            </CookiesProvider>
        </div>
    )
}

