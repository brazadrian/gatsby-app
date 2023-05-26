import React from "react"
import PropTypes from "prop-types"

import Menu from "../menu"
import Footer from "../footer"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <Menu />
        {children}

      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
