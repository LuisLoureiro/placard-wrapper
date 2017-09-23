import React from 'react'

import Events from '../events/index'
import Bets from '../bets'

export default (props) => (
  <main>
    {
      !props.loadingEvents && props.events &&
      <Events events={props.events}
        hideSport={props.hideSport}
        hideCountry={props.hideCountry}
        onEventClick={props.onEventClick}>
        <Bets />
      </Events>
    }
  </main>
)
