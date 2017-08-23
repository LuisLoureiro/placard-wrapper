import React from 'react'

import Sports from '../sports'
import Countries from '../countries'

export default (props) => (
  <header>
    <nav>
      {
        !props.loadingSports &&
        <Sports sports={props.sports} hideChildren>
          <Countries />
        </Sports>
      }
    </nav>
  </header>
)
