import React from 'react'
import { NavLink } from 'react-router-dom'

const cloneChildren = (children, childrenProps) => (
  React.Children.map(children,
    child => React.cloneElement(child, childrenProps))
)

export default (props) => (
  <ol>
    {props.sports.map((sport, idx) => (
      <li key={idx} className={props.hideChildren ? 'hide-children' : ''}>
        <NavLink to={`/${sport.name}`}>{sport.name}</NavLink>
        {cloneChildren(props.children, {
          countries: sport.countries,
          sportName: sport.name
        })}
      </li>
    ))}
  </ol>
)
