import React from 'react'
import { withTracker } from '../tracker'
import { setEvents as setEventsAction } from '../../../api/redux/actions/events'
import EventsAPI from '../../../api/events'
import MainContainer from '../main/index'

export default (dispatch) => (props) => {
  const country = props.match.params.country
  const sport = props.match.params.sport

  return withTracker(
    updateEvents(dispatch, sport, country),
    'events.bySportAndCountry', sport, country
  )(<MainContainer />)
}

function updateEvents (dispatch, sport, country) {
  return () => dispatch(setEventsAction(EventsAPI.getBySportAndCountry(sport, country).fetch()))
}
