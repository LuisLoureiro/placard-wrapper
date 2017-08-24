import React from 'react'
import { NavLink } from 'react-router-dom'

import Sports from '../sports'
import Countries from '../countries'
import PlacardLink from '../placard-link/index'

export default (props) => (
  <header>
    <nav>
      <NavLink exact to='/' className='to-right'>Home</NavLink>
      <PlacardLink className='default to-right' />
      {
        !props.loadingSports &&
        <Sports sports={props.sports} hideChildren>
          <Countries />
        </Sports>
      }
    </nav>
  </header>
)
