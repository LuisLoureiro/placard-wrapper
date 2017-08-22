import React from 'react'

import Sports from '../../components/sports'
import Countries from '../../components/countries'

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
