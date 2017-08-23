import React from 'react'

import Events from '../events'
import Bets from '../bets'

export default (props) => (
  <main>
    {
      !props.loadingEvents &&
      <Events events={props.events}>
        <Bets />
      </Events>
    }
  </main>
)
