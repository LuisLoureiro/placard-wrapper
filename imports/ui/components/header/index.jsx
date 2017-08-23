import React from 'react'

import Sports from '../sports'
import Countries from '../countries'
import PlacardLink from '../placard-link/index'

export default (props) => (
  <header>
    <nav>
      <PlacardLink />
      {
        !props.loadingSports &&
        <Sports sports={props.sports} hideChildren>
          <Countries />
        </Sports>
      }
    </nav>
  </header>
)
