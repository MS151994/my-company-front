import React from 'react';
import {UserLogin} from "./components/UserForm/UserLogin";
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {UserRegister} from "./components/UserForm/UserRegister";

export const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/login" element={<UserLogin/>}/>
                <Route path="/register" element={<UserRegister/>}/>
            </Routes>
        </div>
    )
}

