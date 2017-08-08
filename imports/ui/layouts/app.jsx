import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import SportsComponent from '../components/sports'
import CountriesComponent from '../components/countries'
import CompetitionsComponent from '../components/competitions'
import EventsComponent from '../components/events'
import BetsComponent from '../components/bets'

import { Sports } from '../../api/sports'

const MainComponent = (props) => (
  <div>
    <h3>Size: {props.sports.length}</h3>
    <h3>Sports:</h3>
    <SportsComponent sports={props.sports}>
      <CountriesComponent>
        <CompetitionsComponent>
          <EventsComponent>
            <BetsComponent />
          </EventsComponent>
        </CompetitionsComponent>
      </CountriesComponent>
    </SportsComponent>
  </div>
)

const App = (props) => (
  <section>
    { !props.loading && <MainComponent sports={props.sports} /> }
  </section>
)

export default createContainer(props => {
  const allSportsHandle = Meteor.subscribe('sports.all')
  const allSports = Sports.getAll()

  return {
    loading: !allSportsHandle.ready(),
    sports: allSports.fetch()
  }
}, App)
