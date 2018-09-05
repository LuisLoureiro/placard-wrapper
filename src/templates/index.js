import React from 'react'

import EventBets from './event-bets'
import EventHeading from './event-heading'

import styles from './index.module.styl'

export default ({ data }) => (
  <ol className={styles['events-list']}>
    {
      data.allMongodbHerokuRvm7Q988Events.edges.map(({ node }, idx) => (
        <li key={idx} className={styles['event-item']}>
          <EventHeading event={node} />
          <EventBets betTypes={node.betTypes} />
        </li>
      ))
    }
  </ol>
)

export const query = graphql`
  query EventsListQuery($sport: String, $country: String, $skip: Int = 0, $limit: Int = 10) {
    allMongodbHerokuRvm7Q988Events(
      filter: { sport: { eq: $sport }, country: { eq: $country } },
      sort: { fields: [date], order: ASC },
      skip: $skip,
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
