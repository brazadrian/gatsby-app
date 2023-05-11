import React from "react"
import { Link } from "gatsby"

const Menu = () => {
    return (
        <nav>
            <Link to="/" activeStyle={{ color: "#4D4D4D" }} activeClassName="active">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/contact" activeStyle={{ color: "#4D4D4D" }} activeClassName="active">Contact</Link>
            &nbsp; | &nbsp;
            <Link to="/about" activeStyle={{ color: "#4D4D4D" }} activeClassName="active">About</Link>
        </nav>
    )
}

export default Menu
