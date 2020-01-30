import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Navigation from './navigation'
import EventListenerSimulator from './event-listener-simulator'
import styles from './layout.module.styl'

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
        <main>{children}</main>
        <aside>
          <article
            className={`${styles.fixed} ${styles.bottomRight} ${styles.simulator}`}
          >
            <EventListenerSimulator eventName='odd-selected' />
          </article>
          <nav className={`${styles.fixed} ${styles.topRight}`}>
            <Navigation
              sports={data.allMongodbPlacardDevSportsAndCountries.edges}
            />
          </nav>
        </aside>
      </>
    )}
  />
)
