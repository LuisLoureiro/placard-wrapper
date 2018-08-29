const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const template = path.resolve('./src/pages/index.js')

  return new Promise((resolve) => {
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
      Promise.all(
        result.data.allMongodbPlacardDevSportsAndCountries.edges.map(({ node }) => {
          return graphql(getTotalCountQuery(node.name))
            .then(result => ({
              totalCount: result.data.allMongodbPlacardDevEvents.totalCount,
              sport: node.name,
              countries: node.countries
            }))
        }))
        .then(sports => {
          let promises = []

          sports.forEach(sport => {
            const {
              totalCount,
              sport: sportName,
              countries
            } = sport

            createPaginatedPages(createPage)(totalCount, `/${sportName}`, template, {
              sport: sportName
            })

            promises = promises.concat(countries.map(country => {
              return graphql(getTotalCountQuery(sportName, country.name))
                .then(result => ({
                  totalCount: result.data.allMongodbPlacardDevEvents.totalCount,
                  sport: sportName,
                  country: country.name
                }))
            }))
          })

          return Promise.all(promises)
        })
        .then(countries => {
          countries.forEach(country => {
            const {
              totalCount,
              sport,
              country: countryName
            } = country

            createPaginatedPages(createPage)(totalCount, `/${sport}/${countryName}`, template, {
              sport,
              country: countryName
            })
          })

          resolve()
        })
    })
  })
}

const getTotalCountQuery = (sport, country) => {
  let filter = ''
  if (sport) {
    filter = `sport: { eq: "${sport}"}`

    if (country) {
      filter = filter.concat(`, country: { eq: "${country}"}`)
    }
  }

  return `
    {
      allMongodbPlacardDevEvents(filter: { ${filter} }) {
        totalCount
      }
    }
  `
}

const createPaginatedPages = (createPage) => {
  return (totalCount, path, template, context) => {
    const pageSize = 20
    const numberOfPages = Math.ceil(totalCount / pageSize)

    for (let pageNumber = 0; pageNumber < numberOfPages; pageNumber++) {
      createPage({
        path: `${path}${pageNumber ? `/${pageNumber + 1}` : ''}`,
        component: template,
        layout: pageNumber ? 'clean' : 'index',
        context: Object.assign({
          // Data passed to context is available in page queries as GraphQL variables.
          limit: pageSize,
          skip: pageNumber * pageSize
        }, context)
      })
    }
  }
}
