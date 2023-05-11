import React from "react"
import Layout from "../components/Layout"

const About = () => {
    var text = "About Page"

    return (
        <Layout>
            <h1>{text}</h1>
            <h2>About 2</h2>
            <p>Send us a message!</p>
            <p>{text}</p>

            <p>
                Link externo (do google): <a href="https://www.google.com/" blank>Clique aqui</a>
            </p>
        </Layout>
    )
}

export default About
