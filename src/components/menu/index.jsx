import React from "react"
import { Link } from "gatsby"

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" activeStyle={{ color: "blue" }} className="nav-link" activeClassName="active">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" activeStyle={{ color: "blue" }} className="nav-link" activeClassName="active">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" activeStyle={{ color: "blue" }} className="nav-link" activeClassName="active">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
