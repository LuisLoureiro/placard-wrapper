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
        const slug = `/${node.name}`

        createPage({
          path: slug,
          component: path.resolve(`./src/templates/events-list.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug,
            sport: node.name
          }
        })

        node.countries.forEach(country => {
          const slug = `/${node.name}/${country.name}`

          createPage({
            path: slug,
            component: path.resolve(`./src/templates/events-list.js`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug,
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
