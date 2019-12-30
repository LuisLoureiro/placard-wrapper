import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Navigation from '../components/navigation'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <div>
        <Navigation
          sports={data.allMongodbHerokuRvm7Q988SportsAndCountries.edges}
        />
        {children}
      </div>
    )}
  />
)
