import React from "react"
import { Link } from "gatsby"

const Menu = () => {
    return (
        <nav>
            <Link to="/about" activeStyle={{ color: "red" }} activeClassName="active">About</Link>
            &nbsp; | &nbsp;
            <Link to="/contact" activeStyle={{ color: "red" }} activeClassName="active">Contact</Link>
        </nav>
    )
}

export default Menu
