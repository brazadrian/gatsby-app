/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    author: `@capivair`,
    title: `Capivair`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl nec nisl.`,
    siteUrl: `https://capivair.netlify.app/`,
    copyright: `© 2023 Capivair - Todos os direitos reservados`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: ["https://back-people.onrender.com/sensor"],
      },
    },
  ],
}
