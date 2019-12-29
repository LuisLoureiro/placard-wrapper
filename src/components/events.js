import React from 'react'

import EventBets from './event-bets'
import EventHeading from './event-heading'

import styles from './events.module.styl'

export default ({ events }) => (
  <ol className={styles.eventsList}>
    {events.map(({ node }, idx) => (
      <li key={idx} className={styles.eventItem}>
        <EventHeading event={node} />
        <EventBets betTypes={node.betTypes} />
      </li>
    ))}
  </ol>
)
