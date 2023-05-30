import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

/* import * as styles from "../components/index.module.scss" */

const IndexPage = () => {
  const sensor = useStaticQuery(graphql`
    query sensor {
      restApiSensor {
        sensor {
          _id
          area
          descricao
          id
          nome
          status
          tipo
          x
          y
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Monitoramento" description="Monitoramento de sensores" />
      <div>
        <h1>Monitoramento</h1>
        <h2>Sensores</h2>
        <hr />
        {/* função que vai exibir todos os sensores */}
        {/* {sensor.restApiSensor.sensor.slice(0, 2).map((sensor) => ( */}
        {sensor.restApiSensor.sensor.map(sensor => (
          <div key={sensor._id}>
            <h3>{sensor.nome}</h3>
            <p>
              {"O sensor " + sensor.nome + ", "} <b>{sensor.id}</b>
              {", está " + sensor.status + "."}
            </p>
            <p>
              {"É um sensor " +
                sensor.tipo +
                "." +
                ' Descrito como "' +
                sensor.descricao +
                '". Localizado no(a) '}{" "}
              <b>{sensor.area}</b>{" "}
              {"(X: " + sensor.x + ", Y: " + sensor.y + ")"}
              {"."}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Monitoramento" description="Welcome!!!" />

export default IndexPage
