import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Navigation from './navigation'
import EventListenerSimulator from './event-listener-simulator'
import styles from './layout.module.styl'

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
      <>
        <Navigation
          sports={data.allMongodbHerokuRvm7Q988SportsAndCountries.edges}
        />
        {children}
        <section className={styles.simulator}>
          <EventListenerSimulator eventName='odd-selected' />
        </section>
      </>
    )}
  />
)
