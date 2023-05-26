import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {
    var text = "Contact Page"

    return (
        <Layout>
            <h1>{text}</h1>
            <h2>Contact 2</h2>
            <p>Send us a message!</p>
            <p>{text}</p>
            <React.StrictMode>
                <p>
                    Link externo (do google): <a href="https://www.google.com/" target="_blank" rel="noreferrer noopener">Clique aqui</a>
                </p>
            </React.StrictMode>
        </Layout>
    )
}

export const Head = () => <Seo title="Contact" />

export default Contact
