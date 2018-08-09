import React from 'react'

import EventBets from '../templates/event-bets'
import EventHeading from '../templates/event-heading'

export default ({ data }) => (
  <main>
    <ol>
      {
        data.allMongodbPlacardDevEvents.edges.map(({ node }, idx) => (
          <li key={idx}>
            <EventHeading event={node} />
            <EventBets betTypes={node.betTypes} />
          </li>
        ))
      }
    </ol>
  </main>
)

export const query = graphql`
  query EventsListQuery($sport: String, $country: String) {
    allMongodbPlacardDevEvents(filter: { sport: { eq: $sport }, country: { eq: $country } }) {
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
