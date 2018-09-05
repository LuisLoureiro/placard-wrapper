import React from 'react'

import styles from './event-heading.module.styl'

export default function EventHeading (props) {
  const {
    event
  } = props
  const date = new Date(event.date * 1000)

  const dateDate = formatDate(date)
  const dateTime = formatTime(date)
  const eventName = `${event.home} X ${event.away}`

  return (
    <h4>
      <span className={styles.red}>{event.code}</span>
      {
        ` - ${dateDate}, ${dateTime}
        - ${eventName}
        - ${event.sport}
        - ${event.country}
        - ${event.competition}`
      }
    </h4>
  )
}

function formatDate (date) {
  const now = new Date()

  return date.getDate() === now.getDate() ? 'Hoje'
    : date.getDate() === (now.getDate() + 1) ? 'Amanhã'
    : date.toLocaleDateString()
}

function formatTime (date) {
  const time = date.toLocaleTimeString()
  // Remove seconds from return string
  return time.replace(/:00/, '')
}
