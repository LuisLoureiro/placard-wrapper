import React from 'react'

export default (props) => (
  <ol>
    {props.bets.map((bet, idx) => (
      <li key={idx}>
        <small>
          <span>{bet.name}</span>
          <span> - {bet.home.value}</span>
          {bet.draw.name && <span> | {bet.draw.value}</span>}
          <span> | {bet.away.value}</span>
        </small>
      </li>
    ))}
  </ol>
)
