import React from 'react';
import {UserLogin} from "./components/UserForm/UserLogin";
import {UserRegister} from "./components/UserForm/UserRegister";

export const App = () => {
    return (
        <div>
            <h1>my company manager </h1>
            <UserLogin/>
        </div>
    )
}

