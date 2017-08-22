import React from 'react'

const cloneChildren = (children, childrenProps) => (
  React.Children.map(children,
    child => React.cloneElement(child, childrenProps))
)

export default (props) => (
  <ol>
    {props.sports.map((sport, idx) => (
      <li key={idx} className={props.hideChildren ? 'hide-children' : ''}>
        <p>{sport.name}</p>
        {cloneChildren(props.children, {
          countries: sport.countries
        })}
      </li>
    ))}
  </ol>
)
