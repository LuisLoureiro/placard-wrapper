import React from 'react'
import { graphql } from 'gatsby'

import EventBets from '../components/event-bets'
import EventHeading from '../components/event-heading'

import styles from './events.module.styl'

export default ({ data }) => (
  <ol className={styles.eventsList}>
    {data.allMongodbPlacardDevEvents.edges.map(({ node }, idx) => (
      <li key={idx} className={styles.eventItem}>
        <EventBlock event={node} />
      </li>
    ))}
  </ol>
)

function EventBlock ({ event }) {
  return (
    <>
      <EventHeading event={event} />
      <EventBets
        betTypes={event.betTypes}
        optionClickHandler={handleButtonClick(event)}
      />
    </>
  )
}

function handleButtonClick (eventObj) {
  return ({ betTypeName, oddName, oddValue }) => () => {
    const customEvent = new window.CustomEvent('odd-selected', {
      detail: {
        event: Object.assign({}, eventObj),
        betType: betTypeName,
        odd: { name: oddName, value: oddValue }
      }
    })

    window.dispatchEvent(customEvent)
  }
}

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
