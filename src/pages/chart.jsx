import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Chart = () => {
  var text = "Chart Page"

  return (
    <Layout>
      <Seo title="Chart" />
      <h1>{text}</h1>

      
    </Layout>
  )
}

/* export const Head = () => <Seo title="Chart" lang="uk" />
 */
/* export const Head = () => <Seo title="About"/> */

export default Chart
