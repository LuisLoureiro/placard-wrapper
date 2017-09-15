import React from 'react'
import { NavLink } from 'react-router-dom'

import cloneChildren from './cloneChildren'

export default (props) => (
  <ol>
    {props.countries.map((country, idx) => (
      <li key={idx}>
        <NavLink to={`/${props.sportName}/${country.name}`}>{country.name}</NavLink>
        {cloneChildren(props.children, {
          competitions: country.competitions
        })}
      </li>
    ))}
  </ol>
)
