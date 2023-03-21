import {  Link, animateScroll as scroll } from "react-scroll";

export function Menucategories({name}) {
    return (
        <li className="navbar-list">
            <Link to={name} className="navbar-item" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                {name}
            </Link>
        </li>
    )
}