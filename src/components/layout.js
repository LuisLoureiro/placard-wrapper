import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Navigation from './navigation'
import EventListenerSimulator from './event-listener-simulator'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <>
        <Navigation
          sports={data.allMongodbPlacardDevSportsAndCountries.edges}
        />
        {children}
          <EventListenerSimulator eventName='odd-selected' />
      </>
    )}
  />
)
