import {Header} from "../Header/Header";
import {useCookies} from "react-cookie";
import {UserLogin} from "../UserForm/UserLogin";
import React from "react";
import {ItemsArchContainer} from "./ItemsArchContainer/ItemsArchContainer";

export const Archives = () => {
    const [cookie, setCookie] = useCookies(['user']);
    return (
        <>
            <Header/>
            {(cookie.user && cookie.user !== "undefined") ? <ItemsArchContainer/> : <UserLogin/>}
        </>
    )
}