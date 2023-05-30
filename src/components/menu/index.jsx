import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <a href="/">
          <StaticImage
            src="../../images/capivair-icon.png"
            alt="Capivair Icon"
            placeholder="blurred"
            layout="fixed"
            height={34.38}
            /* borda */
            style={{ margin: "30%" }}
          />
        </a>
        <h3 className="text-primary">
          <a className="navbar-brand mx-4 mb-3" href="/">
            Capivair
          </a>
        </h3>

        <li className="nav-item">
          <Link
            to="/hotpots"
            activeStyle={{ color: "blue" }}
            className="nav-link"
            activeClassName="active"
          >
            Hotpots
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
