import React from "react"
import { Link } from "gatsby"

const Menu = () => {
    return (
        <nav>
            <Link to="/" activeStyle={{ color: "red" }} activeClassName="active">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/contact" activeStyle={{ color: "red" }} activeClassName="active">Contact</Link>
            &nbsp; | &nbsp;
            <Link to="/about" activeStyle={{ color: "red" }} activeClassName="active">About</Link>
        </nav>
    )
}

export default Menu
