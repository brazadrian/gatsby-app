import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Hotspots = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mapa_planta_baixa.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 150
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Hotspots" />
      {/* hotspots at image */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Hotspots</h1>
            <p className="text-center">
              <GatsbyImage
                image={data.file.childImageSharp.gatsbyImageData}
                alt="Capivair Icon"
                placeholder="blurred"
                layout="fixed"
                style={{ margin: "1%" }}
              />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Hotspots
