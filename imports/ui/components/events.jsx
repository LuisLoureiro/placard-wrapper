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
          <span>{event.code}</span>
          <span> - {event.date.toLocaleString()}</span>
          <span> - {event.home} X {event.away}</span>
        </p>
        {cloneChildren(props.children, {
          bets: event.bets
        })}
      </li>
    ))}
  </ol>
)
