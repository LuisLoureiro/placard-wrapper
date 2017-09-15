import React from 'react'
import { NavLink } from 'react-router-dom'

import cloneChildren from './cloneChildren'

export default (props) => (
  <ol className={props.className}>
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
