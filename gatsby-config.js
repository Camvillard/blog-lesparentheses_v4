require('dotenv').config();

module.exports = {
  // all the meta for the website
  siteMetadata: {
    title: `les parentheses`,
    description: `histoires & ponctuation`,
    author: `camille villard | cdltbisou`,
  },
  plugins: [
  // Provides drop-in support for server rendering data added with React Helmet.
  // React Helmet is a component which lets you control your document head using their React component.
    `gatsby-plugin-react-helmet`,
    // A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    //Creates ImageSharp nodes from image types that are supported by the Sharp image
    //processing library and provides fields in their GraphQL types for processing your
    //images in a variety of ways including resizing, cropping, and creating responsive images.
    // https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/?=trans
    `gatsby-transformer-sharp`,
    // Exposes several image processing functions built on the Sharp image processing library.
    // https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/
    `gatsby-plugin-sharp`,
    // uses node-sass
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // plugin that allows us to fetch data from wordpress
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: process.env.WORDPRESS_BASE_URL,
        protocol: process.env.WORDPRESS_PROTOCOL,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        // auth: {
        //   wpcom_app_clientSecret: 'vb9tpu2nSV1UcSE0CsoGcXqwB9SNqpaadWIxEAydLw3cCUeb7vrGTg5q4D6gj9vL',
        //   wpcom_app_clientId: '65512',
        //   wpcom_user: 'lesparenthesesblog@gmail.com',
        //   wpcom_pass: 'cdlTb!$0u201?GE',
        // },
        // includedRoutes: [
        //   "**/categories",
        //   "**/posts",
        //   "**/pages",
        //   "**/tags",
        //   "**/media",
        // ],
      }
    },
    // allows us to use svg as react component
    // import Icon from '$PATH_FILE' and use it as a basic component
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },
    // plugin to access instagram account
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'cam_villard',
        access_token: process.env.INSTAGRAM_TOKEN,
        instagram_id: process.env.INSTAGRAM_ID,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
  // end of plugins
}
