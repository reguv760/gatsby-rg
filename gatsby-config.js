module.exports = {
  siteMetadata: {
    title: 'Gatsby by RG',
    desc: "Some description"
  },
  plugins: ['gatsby-plugin-react-helmet',
            'gatsby-plugin-styled-components',
            {
              resolve: 'gatsby-source-filesystem',
              options:
              {
                name: 'img',
                path: `${__dirname}/src/images`
              }
            },
            'gatsby-transformer-sharp',
            'gatsby-plugin-sharp'
          ],
}

//close server if changes are made in gatsby-config.js
//restart server after changes are saved:::
