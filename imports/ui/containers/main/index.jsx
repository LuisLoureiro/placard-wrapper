import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import Main from '../../components/main/index'

import EventsAPI from '../../../api/events'

export default createContainer(props => {
  const sport = props.match.params.sport
  const country = props.match.params.country

  const allEventsHandle = Meteor.subscribe('events.bySportAndCountry', sport, country)
  const allEvents = EventsAPI.getBySportAndCountry(sport, country)

  return {
    loadingEvents: !allEventsHandle.ready(),
    events: allEvents.fetch(),
    hideSport: !!sport,
    hideCountry: !!country
  }
}, Main)
