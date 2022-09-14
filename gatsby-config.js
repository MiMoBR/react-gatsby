const path = require("path");

module.exports = {
  siteMetadata: {
    title: `MiMoBR`,
    description: `Description Here`,
    author: `@iamreinaldonani`,
    siteUrl: `https://www.mimobr.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WV45BL3",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        // defaultDataLayer: function () {
        //   return {
        //     pageType: window.pageType,
        //   }
        // },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        // enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },
    "gatsby-plugin-styled-components",
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
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
