import React from 'react'
import { graphql } from 'gatsby'

import EventBets from '../components/event-bets'
import EventHeading from '../components/event-heading'

import styles from './events.module.styl'

export default ({ data }) => (
  <ol className={styles.eventsList}>
    {data.allMongodbPlacardDevEvents.edges.map(({ node }, idx) => (
      <li key={idx} className={styles.eventItem}>
        <EventHeading event={node} />
        <EventBets betTypes={node.betTypes} />
      </li>
    ))}
  </ol>
)

export const query = graphql`
  query(
    $filter: mongodbPlacard_devEventsFilterInput
    $skip: Int = 0
    $limit: Int = 10
  ) {
    allMongodbPlacardDevEvents(
      filter: $filter
      sort: { fields: [date], order: ASC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          code
          home
          away
          date
          sport
          country
          competition
          betTypes {
            name
            options {
              name
              value
            }
          }
        }
      }
    }
  }
`
