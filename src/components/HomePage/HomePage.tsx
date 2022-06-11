import {useCookies} from "react-cookie";
import {UserLogin} from "../UserForm/UserLogin";
import {Header} from "../Header/Header";
import React, {useEffect} from "react";

export const HomePage = () => {
    const [cookie, setCookie] = useCookies(['user']);

    return (
        <div>
            <Header/>
            {(cookie.user && cookie.user !== "undefined") ? <h1>Home page!</h1> : <UserLogin/>}
        </div>
    )
}