import React from "react"
import Menu from "../components/Menu"

const Contact = () => {
    var text = "Contact Page"

    return (
        <>
            <Menu />
            <h1>{text}</h1>
            <h2>Contact 2</h2>
            <p>Send us a message!</p>
            <p>{text}</p>

            <p>
                Link externo (do google): <a href="https://www.google.com/" blank>Clique aqui</a>
            </p>
        </>
    )
}

export default Contact
