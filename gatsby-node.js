const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMongodbPlacardDevSportsAndCountries {
          edges {
            node {
              name
              countries {
                name
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMongodbPlacardDevSportsAndCountries.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.name}`,
          component: path.resolve(`./src/pages/index.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            sport: node.name
          }
        })

        node.countries.forEach(country => {
          createPage({
            path: `/${node.name}/${country.name}`,
            component: path.resolve(`./src/pages/index.js`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              sport: node.name,
              country: country.name
            }
          })
        })
      })
      resolve()
    })
  })
}
