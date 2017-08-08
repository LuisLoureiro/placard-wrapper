import React from 'react'

const cloneChildren = (children, childrenProps) => (
  React.Children.map(children,
    child => React.cloneElement(child, childrenProps))
)

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
