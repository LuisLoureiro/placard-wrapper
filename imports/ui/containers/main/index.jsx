import React from 'react'

import Events from '../../components/events'
import Bets from '../../components/bets'

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
