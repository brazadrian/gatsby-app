/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    author: `@capivair`,
    title: `Capivair`,
    description: `O Capivair é um software de monitoramento de qualidade do ar. Ele é capaz de coletar dados de sensores de qualidade do ar e apresentá-los de forma intuitiva e acessível.`,
    siteUrl: `https://capivair.netlify.app/`,
    copyright: `© 2023 Capivair - Todos os direitos reservados`,
    contributors: [
      {
        name: "Ayrton Santos Maia Medeiros",
        email: "ayrton.maia0@gmail.com",
        github: "https://github.com/AyrtonMaia0",
        linkedin: "https://www.linkedin.com/in/ayrton-maia-404489228/",
      },
      {
        name: "Erika Vilas Boas dos Santos",
        email: "erikavbscontato@gmail.com",
        github: "https://github.com/ErikavbSantos",
        linkedin: "https://www.linkedin.com/in/erikavbsantos/",
      },
      {
        name: "Everton Gabriel Silva dos Anjos",
        email: "evertongabrielljs@gmail.com",
        github: "https://github.com/Spatialcaver",
        linkedin: "https://www.linkedin.com/in/everton-gabriel-088474176/",
      },
      {
        name: "Gilmar Adrian de Souza Braz",
        email: "gilmaradrian127@gmail.com",
        github: "https://github.com/brazadrian",
        linkedin: "https://www.linkedin.com/in/brazadrian/",
      },
      {
        name: "Karolayne da Silva Santos",
        email: "karolaynessantoscontato@gmail.com",
        github: "https://github.com/Karolayne-silva",
        linkedin: "https://www.linkedin.com/in/karolayne-silva-a0a49a1a1/",
      },
      {
        name: "Lívia Vitória dos Santos Gomes",
        email: "livia.vitoria.santos2016@gmail.com",
        github: "https://github.com/ViviSGG",
        linkedin: "https://www.linkedin.com/in/lívia-vitória-6a5771230/",
      },
      {
        name: "Maiara Evelyn Meneses Pereira",
        email: "maiaraevelyn27@hotmail.com",
        github: "https://github.com/wildestmaii",
        linkedin: "https://www.linkedin.com/in/wildestmaii/",
      },
      {
        name: "Quézia Cassiano de Souza Silva",
        email: "quezia.c.s.silva@gmail.com",
        github: "https://github.com/quezia-cassiano",
        linkedin: "https://www.linkedin.com/in/queziacssilva/",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
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
        name: `Capivair`,
        short_name: `Capivair_sn`,
        description: `O Capivair é um software de monitoramento de qualidade do ar. Ele é capaz de coletar dados de sensores de qualidade do ar e apresentá-los de forma intuitiva e acessível.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#D9D9D9`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `fullscreen`,
        icon: `src/images/capivair-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: ["https://back-people.onrender.com/sensor"],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
