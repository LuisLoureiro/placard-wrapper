import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import Sports from '../components/sports'
import Countries from '../components/countries'
import Competitions from '../components/competitions'
import Events from '../components/events'
import Bets from '../components/bets'

import SportsAPI from '../../api/sports'

const Main = (props) => (
  <div>
    <h3>Size: {props.sports.length}</h3>
    <h3>Sports:</h3>
    <Sports sports={props.sports}>
      <Countries>
        <Competitions>
          <Events>
            <Bets />
          </Events>
        </Competitions>
      </Countries>
    </Sports>
  </div>
)

const App = (props) => (
  <section>
    { !props.loading && <Main sports={props.sports} /> }
  </section>
)

export default createContainer(props => {
  const allSportsHandle = Meteor.subscribe('sports.all')
  const allSports = SportsAPI.getAll()

  return {
    loading: !allSportsHandle.ready(),
    sports: allSports.fetch()
  }
}, App)
