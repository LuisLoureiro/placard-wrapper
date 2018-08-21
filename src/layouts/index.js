import React from 'react'

import Navigation from '../templates/navigation'

export default ({ data, children }) => (
  <div>
    <Navigation sports={data.allMongodbHerokuRvm7Q988SportsAndCountries.edges} />
    {children()}
  </div>
)

export const query = graphql`
  query NavigationQuery {
    allMongodbHerokuRvm7Q988SportsAndCountries {
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
`
