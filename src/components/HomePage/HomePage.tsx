import {useCookies} from "react-cookie";
import {NavButton} from "../utils/NavButton/NavButton";
import {UserLogin} from "../UserForm/UserLogin";

export const HomePage = () => {
    const [cookie, setCookie] = useCookies(['user']);

    return (
        <div>
            {(cookie.user && cookie.user !== "undefined") ? <h1>Home page!</h1> : <UserLogin/>}
        </div>
    )
}