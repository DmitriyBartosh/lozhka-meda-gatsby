module.exports = {
  siteMetadata: {
    title: `lozhka-meda-gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `avif`, `webp`],
          quality: 85,
          breakpoints: [750, 1366, 1920],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Студия массажа | Ложка меда`,
        short_name: `Ложка меда`,
        start_url: `/`,
        background_color: `#dccbb6`,
        theme_color: `#dccbb6`,
        display: `standalone`,
        lang: `ru`,
        icon: `src/images/logo.jpg`,
      },
    },
    "gatsby-plugin-sitemap",
    `gatsby-plugin-image`,
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "massage",
        path: "./src/images/massage/",
      },
      __key: "massage",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "relaxspaboth",
        path: "./src/images/relaxspa/both/",
      },
      __key: "relaxspaboth",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "relaxspaman",
        path: "./src/images/relaxspa/man/",
      },
      __key: "relaxspaman",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "relaxspawoman",
        path: "./src/images/relaxspa/woman/",
      },
      __key: "relaxspawoman",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
      __key: "data",
    },
  ],
};
