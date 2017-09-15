import React from 'react'

import cloneChildren from './cloneChildren'

export default (props) => (
  <ol>
    {props.competitions.map((competition, idx) => (
      <li key={idx}>
        <p>{competition.name}</p>
        {cloneChildren(props.children, {
          events: competition.events
        })}
      </li>
    ))}
  </ol>
)
