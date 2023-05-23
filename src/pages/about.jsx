import React from "react"
import Layout from "../components/layout"

import CardV2 from "../components/cardV2"
import BasicExample from "../components/basicExample"

const About = () => {
    var text = "About Page"

    return (
        <Layout>
            <h1>{text}</h1>
            <h2>About 2</h2>
            <p>Send us a message!</p>
            <p>{text}</p>
            <BasicExample />

            <p>
                Link externo (do google): <a href="https://www.google.com/" blank>Clique aqui</a>
            </p>

            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <CardV2
                            titleCard="Primeiro cartão"
                            textCard="Texto do primeiro cartão"
                            colorButton="gatsby"
                        />
                    </div>
                    <div className="col-4">
                        <CardV2
                            titleCard="Segundo cartão"
                            textCard="Texto do segundo cartão"
                            colorButton="danger"
                        />
                    </div>
                    <div className="col-4">
                        <CardV2
                            titleCard="Terceiro cartão"
                            textCard="Texto do terceiro cartão"
                            colorButton="success"
                        />
                    </div>
                    <div className="col-4">
                        <CardV2
                            titleCard="Quarto cartão"
                            textCard="Texto do quarto cartão"
                            colorButton="warning"
                        />
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default About
