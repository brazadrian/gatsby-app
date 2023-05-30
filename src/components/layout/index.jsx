import React from "react"
import PropTypes from "prop-types"
/* import { StaticImage } from "gatsby-plugin-image" */

import Menu from "../menu"
import Footer from "../footer"

import "./css2.css"

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <div className="container">
          <Menu />
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
