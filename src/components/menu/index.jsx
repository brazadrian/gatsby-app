import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li>
          <a href="/">
            <StaticImage
              src="../../images/capivair-icon-sf.png"
              alt="Capivair Icon"
              placeholder="blurred"
              layout="fixed"
              height={34.38}
              /* borda */
              style={{ margin: "30%" }}
            />
          </a>
        </li>
      </ul>
      <h3 className="text-primary">
        <a className="navbar-brand mx-4 mb-3" href="/">
          Capivair
        </a>
      </h3>

      <Link
        to="/hotspots"
        activeStyle={{ color: "blue" }}
        className="nav-link"
        activeClassName="active"
      >
        Hotspots
      </Link>
    </nav>
  )
}

export default Menu
