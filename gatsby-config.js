const path = require("path");

module.exports = {
  siteMetadata: {
    title: `MiMoBR`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "ga-xxxxx",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/png/mimobr_favicon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/png/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        resolveModules: [path.join(__dirname, "src")],
        "@assets": path.join(__dirname, "src", "assets"),
        "@components": path.join(__dirname, "src", "components"),
        "@enums": path.join(__dirname, "src", "enums"),
        "@route": path.join(__dirname, "src", "route"),
        "@routesPages": path.join(__dirname, "src", "routesPages"),
        "@services": path.join(__dirname, "src", "services"),
        "@store": path.join(__dirname, "src", "store"),
        "@util": path.join(__dirname, "src", "util"),
      },
    },
  ],
};
