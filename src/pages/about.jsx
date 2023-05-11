import React from "react"
import Menu from "../components/Menu"

const About = () => {
    var text = "About Page"

    return (
        <>
            <Menu />
            <h1>{text}</h1>
            <h2>About 2</h2>
            <p>Send us a message!</p>
            <p>{text}</p>

            <p>
                Link externo (do google): <a href="https://www.google.com/" blank>Clique aqui</a>
            </p>
        </>
    )
}

export default About
