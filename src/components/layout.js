import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../templates/navigation'

export default ({ data, children }) => (
  <div>
    <Navigation sports={data.allMongodbPlacardDevSportsAndCountries.edges} />
    {children}
  </div>
)

export const query = graphql`
  query NavigationQuery {
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
`
