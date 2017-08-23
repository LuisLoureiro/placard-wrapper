import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import Main from '../../components/main/index'

import EventsAPI from '../../../api/events'

export default createContainer(props => {
  const allEventsHandle = Meteor.subscribe('events.next24Hours')
  const allEvents = EventsAPI.getAllForNext24Hours()

  return {
    loadingEvents: !allEventsHandle.ready(),
    events: allEvents.fetch()
  }
}, Main)
