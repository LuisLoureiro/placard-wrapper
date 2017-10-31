import React from 'react'

import cloneChildren from '../cloneChildren'

export default (props) => (
  <ol>
    {props.events.map((event, idx) => (
      <li key={idx} onClick={ev => props.onEventClick(ev, event)}>
        <p>
          <span className='bold'>{event.code}</span>
          <span>{event.date && formatDate(new Date(event.date))}</span>
          <span className='bold'>{event.home} X {event.away}</span>
          {
            !props.hideSport ? <span>{event.sport}</span> : ''
          }
          {
            !props.hideCountry ? <span>{event.country}</span> : ''
          }
          <span>{event.competition}</span>
        </p>
        {cloneChildren(props.children, {
          bets: event.bets
        })}
      </li>
    ))}
  </ol>
)

function formatDate (date) {
  return `${setTodayTomorrowOrDate(date)}, ${setTwoDigits(date.getHours())}:${setTwoDigits(date.getMinutes())}`
}

function setTodayTomorrowOrDate (date) {
  const now = new Date()

  if (now.toLocaleDateString() === date.toLocaleDateString()) {
    return 'Hoje'
  }

  now.setDate(now.getDate() + 1)

  if (now.toLocaleDateString() === date.toLocaleDateString()) {
    return 'Amanhã'
  }

  return `${setTwoDigits(date.getDate())}/${setTwoDigits(date.getMonth() + 1)}/${date.getFullYear()}`
}

function setTwoDigits (number) {
  return (number / 10) < 1 ? '0' + number : number
}
