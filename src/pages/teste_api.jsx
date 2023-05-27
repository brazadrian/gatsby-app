import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Teste_api = () => {

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
            <Seo title="Teste Api" />
            <div>
                <h1>Teste Api</h1>
                {/* função que vai exibir todos os sensores */}
                {/* {sensor.restApiSensor.sensor.slice(0, 2).map((sensor) => ( */}
                {sensor.restApiSensor.sensor.map((sensor) => (
                    <div key={sensor.id}>
                        <h2>{sensor.id}</h2>
                        <p>{sensor.nome}</p>
                        <p>{sensor.descricao}</p>
                        <p>{sensor.tipo}</p>
                        <p>{sensor.status}</p>
                        <p>{sensor.area}</p>
                        <p>{sensor.x}</p>
                        <p>{sensor.y}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Teste_api