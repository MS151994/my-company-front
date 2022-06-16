import './header.css';
import {useCookies} from "react-cookie";
import {IconNotification} from "../IconNotification/IconNotification";
import {Menu} from "./Menu/Menu";

export const Header = () => {
    const [cookie, setCookie, removeCookie] = useCookies(['user', 'username']);

    const handleLogout = () => removeCookie('user')

    return (
        <div>
            {(cookie.user && cookie.user !== 'undefined') &&
                <div className={"header__container"}>
                    <div className={"box__userName"}>
                        <p>Welcome, <span>{cookie.username}</span></p>
                    </div>
                    <IconNotification/>
                    <div>
                        <button className={"logout__button"} onClick={handleLogout}>logout</button>
                    </div>
                    <Menu/>
                </div>
            }
        </div>
    )
}