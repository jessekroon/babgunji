module.exports = {
  siteMetadata: {
    title: "Gatsby Starter - Strata by HTML5 UP",
    author: "Hunter Chang",
    description: "A Gatsby.js Starter based on Strata by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/Kermit.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table: 'https://www.notion.so/140e30ef9e9548f3ada1c434ea210c23?v=be0116425b7c4db284f18873bf846725',
            cacheType: 'html'
          }
        ]
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
