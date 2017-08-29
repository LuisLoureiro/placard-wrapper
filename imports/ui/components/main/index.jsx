import React from 'react'

import Events from '../events/index'
import Bets from '../bets'

export default (props) => (
  <main>
    {
      !props.loadingEvents &&
      <Events events={props.events} hideSport={props.hideSport} hideCountry={props.hideCountry}>
        <Bets />
      </Events>
    }
  </main>
)
