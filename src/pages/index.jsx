import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/card"

import * as styles from "../components/index.module.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Welcome!!!" />
    <div className="container">
      <div className="row">
        <div className="cold-12 py-4">
          <div className={styles.textCenter}>
            <h1>
              {" "}
              Welcome to <b>Gatsby!</b>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
    <Card />
  </Layout>
)

/* export const Head = () => <Seo title="Home" description="Welcome!!!" /> */

export default IndexPage
