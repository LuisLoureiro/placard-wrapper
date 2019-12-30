const path = require('path')

const templateClean = path.resolve('./src/templates/events-clean.js')
const template = path.resolve('./src/templates/events.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(resolve => {
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
        result.data.allMongodbPlacardDevSportsAndCountries.edges
          .map(({ node }) =>
            graphql(getTotalCountQuery(node.name)).then(result => ({
              totalCount: result.data.allMongodbPlacardDevEvents.totalCount,
              sport: node.name,
              countries: node.countries
            }))
          )
          .concat(
            graphql(getTotalCountQuery()).then(result => ({
              totalCount: result.data.allMongodbPlacardDevEvents.totalCount,
              sport: undefined,
              countries: []
            }))
          )
      )
        .then(sports => {
          let promises = []

          sports.forEach(sport => {
            const { totalCount, sport: sportName, countries } = sport

            createPaginatedPages(createPage)(
              totalCount,
              `/${sportName || ''}`,
              {
                sport: sportName
              }
            )

            promises = promises.concat(
              countries.map(country => {
                return graphql(
                  getTotalCountQuery(sportName, country.name)
                ).then(result => ({
                  totalCount: result.data.allMongodbPlacardDevEvents.totalCount,
                  sport: sportName,
                  country: country.name
                }))
              })
            )
          })

          return Promise.all(promises)
        })
        .then(countries => {
          countries.forEach(country => {
            const { totalCount, sport, country: countryName } = country

            createPaginatedPages(createPage)(
              totalCount,
              `/${sport}/${countryName}`,
              {
                sport,
                country: countryName
              }
            )
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

const createPaginatedPages = createPage => {
  return (totalCount, path, context) => {
    const pageSize = 10
    const numberOfPages = Math.ceil(totalCount / pageSize)
    const filter = {}

    if (context.sport) {
      filter.sport = { eq: context.sport }
    }
    if (context.country) {
      filter.country = { eq: context.country }
    }

    for (let pageNumber = 0; pageNumber < numberOfPages; pageNumber++) {
      let withLayout = true
      let pathWithNumber = path

      if (pageNumber) {
        pathWithNumber += `${!path.endsWith('/') ? '/' : ''}${pageNumber + 1}`
        withLayout = false
      }

      createPage({
        path: pathWithNumber,
        component: withLayout ? template : templateClean,
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          limit: pageSize,
          skip: pageNumber * pageSize,
          filter,
          numberOfPages
        }
      })
    }
  }
}
