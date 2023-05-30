import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, meta, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          rel: `shortcut icon`,
          href: `https://capivair.netlify.app/img/logo_capivara2.png`,
          type: `image/x-icon`,
        },
        {
          property: `og:title`,
          ontent: title,
        },
        {
          property: `og:description`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://capivair.netlify.app/img/logo_capivara2.png`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://capivair.netlify.app/`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `robots`,
          content: `noindex,nofollow`,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: `Página do site da Capivair.`,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
