import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
