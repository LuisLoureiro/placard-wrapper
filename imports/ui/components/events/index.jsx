import React from 'react'

const cloneChildren = (children, childrenProps) => (
  React.Children.map(children,
    child => React.cloneElement(child, childrenProps))
)

export default (props) => (
  <ol>
    {props.events.map((event, idx) => (
      <li key={idx}>
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
