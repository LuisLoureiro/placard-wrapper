import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import Sports from '../components/sports'
import Countries from '../components/countries'
import Events from '../components/events'
import Bets from '../components/bets'

import SportsAPI from '../../api/sports'
import EventsAPI from '../../api/events'

const Header = (props) => (
  <header>
    <nav>
      {
        !props.loadingSports &&
        <Sports sports={props.sports}>
          <Countries />
        </Sports>
      }
    </nav>
  </header>
)

const Main = (props) => (
  <main>
    {
      !props.loadingEvents &&
      <Events events={props.events}>
        <Bets />
      </Events>
    }
  </main>
)

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
