module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCg1lwg3lIVR_5yH3hVNy5N17OdEbWvV4s",
          authDomain: "inhouse-dev-ddaad.firebaseapp.com",
          databaseURL: "https://inhouse-dev-ddaad.firebaseio.com",
          projectId: "inhouse-dev-ddaad",
          storageBucket: "inhouse-dev-ddaad.appspot.com",
          messagingSenderId: "140381093941",
          appId: "1:140381093941:web:3c1867ba28f6bd782e717c",
          measurementId: "G-3YKMQXGTH8"
        }
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        background_color: `#ddd`,
        theme_color: `#3A3A51`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-135446561-4",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: true,
        // Any additional optional fields
        siteSpeedSampleRate: 5,
      },
    },
  ],
}
