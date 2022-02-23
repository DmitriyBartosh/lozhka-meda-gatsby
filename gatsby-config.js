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
        icon: `src/images/logo.png`,
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
