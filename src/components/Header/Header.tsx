import './header.css';
import {useCookies} from "react-cookie";

export const Header = () => {
    const [cookie, setCookie, removeCookie] = useCookies(['user']);

    const handleLogout = () => removeCookie('user')

    return (
        <div>
            {(cookie.user && cookie.user !== 'undefined') &&
                <div className={"header__container"}>
                    <div>
                        {cookie.user}
                    </div>
                    <div>icons</div>
                    <div>
                        <button className={"logout__button"} onClick={handleLogout}>logout</button>
                    </div>
                </div>
            }
        </div>
    )
}