import {Link} from "react-router-dom";
import './navButton.css';

interface Props {
    infoText: string;
    buttonName: string;
    to: string;
}

export const NavButton = (props: Props) => {
    return (
        <p className={"info__text"}> {props.infoText}
            <Link
                to={props.to}
                className={"nav__button"}>{props.buttonName}
            </Link>
        </p>
    )
}