/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/website-plausible",
  siteMetadata: {
    title: `YesNo`,
    siteUrl: `https://yordalinavm.github.io/website-plausible/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: 'yordalinavm.github.io/website-plausible', // Add your Plausible domain here
        proxyScript: 'https://plausible.io/js/script.js'
      },
    },

  ],
}
