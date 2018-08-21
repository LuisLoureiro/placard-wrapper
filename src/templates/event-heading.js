import React from 'react'

import styles from './event-heading.module.styl'

export default class EventHeading extends React.Component {
  constructor (props) {
    super(props)

    const date = new Date(props.event.date * 1000)

    this.state = {
      dateDate: formatDate(date),
      dateTime: formatTime(date),
      eventName: `${props.event.home} X ${props.event.away}`
    }
  }

  render () {
    const event = this.props.event

    return (
      <h4>
        <span className={styles.red}>{event.code}</span>
        {
          ` - ${this.state.dateDate}, ${this.state.dateTime}
          - ${this.state.eventName}
          - ${event.sport}
          - ${event.country}
          - ${event.competition}`
        }
      </h4>
    )
  }
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
