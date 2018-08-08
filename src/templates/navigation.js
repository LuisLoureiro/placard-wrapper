import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({ sports }) => (
  <nav>
    <ol>
      {
        sports.map(({ node }, idx) => (
          <li key={idx}>
            <NavLink
              to={`/${node.name}`}
              activeClassName='active'>
              { node.name }
            </NavLink>
            <ol>
              {
                node.countries.map((country, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={`/${node.name}/${country.name}`}
                      activeClassName='active'>
                      { country.name }
                    </NavLink>
                  </li>
                ))
              }
            </ol>
          </li>
        ))
      }
    </ol>
  </nav>
)
