import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import Header from '../containers/header/index'
import Main from '../containers/main/index'

import SportsAPI from '../../api/sports'
import EventsAPI from '../../api/events'

const App = (props) => (
  <div>
    <Header {...props} />
    <Main {...props} />
  </div>
)

export default createContainer(props => {
  const allSportsHandle = Meteor.subscribe('sports.all')
  const allEventsHandle = Meteor.subscribe('events.next24Hours')
  const allSports = SportsAPI.getAll()
  const allEvents = EventsAPI.getAllForNext24Hours()

  return {
    loadingSports: !allSportsHandle.ready(),
    loadingEvents: !allEventsHandle.ready(),
    sports: allSports.fetch(),
    events: allEvents.fetch()
  }
}, App)
