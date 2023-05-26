import React from "react"
import { useStaticQuery, graphql } from "gatsby"
/* import * as Styled from "./styled" */

const Footer = () => {
    const {
        site: {
            siteMetadata: {
                copyright,
                description,
                siteUrl,
                title,
            }
        }
    } = useStaticQuery(graphql`
    {
        site {
            siteMetadata {
              copyright
              description
              siteUrl
              title
            }
        }
    }
    `)

    return (
        <div>
            <footer className="bg-light text-center text-lg-start">
                <div className="text-center p-3">
                    <p>
                        <a href={siteUrl} target="_blank" rel="noreferrer noopener">
                            {copyright}
                        </a>
                    </p>
                </div>
            </footer >
        </div >
    )
}

export default Footer
