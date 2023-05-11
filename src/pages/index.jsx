import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/card"

import * as styles from "../components/index.module.scss"


const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
    </div>
    <Card />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
