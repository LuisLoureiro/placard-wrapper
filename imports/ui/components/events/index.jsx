import React from 'react'

import cloneChildren from '../cloneChildren'

export default (props) => (
  <ol>
    {props.events.map((event, idx) => (
      <li key={idx} onClick={ev => props.onEventClick(ev, event)}>
        <p>
          <span className='bold'>{event.code}</span>
          <span>{event.date && new Date(event.date).toLocaleString()}</span>
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
