import './menu.css'
import {useState} from "react";
import {Link} from "react-router-dom";

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="hamburger__menu" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {isOpen && <div className={`menu__element ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li>
                        <button onClick={() => setIsOpen(!isOpen)}>X</button>
                    </li>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/archives'}>archives</Link></li>
                </ul>
            </div>}
        </>
    )
}