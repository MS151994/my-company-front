import {useCookies} from "react-cookie";
import {UserLogin} from "../UserForm/UserLogin";
import {Header} from "../Header/Header";
import React from "react";
import {ItemContainer} from "./ItemContainer/ItemContainer";

export const HomePage = () => {
    const [cookie, setCookie] = useCookies(['user']);

    return (
        <div>
            <Header/>
            {(cookie.user && cookie.user !== "undefined") ? <ItemContainer/> : <UserLogin/>}
        </div>
    )
}