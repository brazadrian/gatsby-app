import React from "react"
import Layout from "../components/layout"

const Contact = () => {
    var text = "Contact Page"

    return (
        <Layout>
            <h1>{text}</h1>
            <h2>Contact 2</h2>
            <p>Send us a message!</p>
            <p>{text}</p>

            <p>
                Link externo (do google): <a href="https://www.google.com/" blank>Clique aqui</a>
            </p>
        </Layout>
    )
}

export default Contact
