require("dotenv").config();

// console.log(process.env);

module.exports = {
  siteMetadata: {
    title: `Phil McKenzie Digital`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN
      }
    },
    `gatsby-plugin-google-analytics`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-158856833-1"
      }
    }
  ]
};
