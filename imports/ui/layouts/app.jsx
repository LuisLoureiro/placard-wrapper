import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import { Sports } from '../../api/sports'

const BetsComponent = (props) => (
  <ol>
    {props.bets.map((bet, idx) => (
      <li key={idx}>
        <p>
          <span>{bet.name}</span>
          <span> - {bet.home.value}</span>
          {bet.draw.name && <span> | {bet.draw.value}</span>}
          <span> | {bet.away.value}</span>
        </p>
      </li>
    ))}
  </ol>
)

const EventsComponent = (props) => (
  <ol>
    {props.events.map((event, idx) => (
      <li key={idx}>
        <p>
          <span>{event.code}</span>
          <span> - {event.date.toLocaleString()}</span>
          <span> - {event.home} X {event.away}</span>
        </p>
        <BetsComponent bets={event.bets} />
      </li>
    ))}
  </ol>
)

const CompetitionsComponent = (props) => (
  <ol>
    {props.competitions.map((competition, idx) => (
      <li key={idx}>
        <p>{competition.name}</p>
        <EventsComponent events={competition.events} />
      </li>
    ))}
  </ol>
)

const CountriesComponent = (props) => (
  <ol>
    {props.countries.map((country, idx) => (
      <li key={idx}>
        <p>
          <span>{country.name}</span> - <span>{country.url}</span>
        </p>
        <CompetitionsComponent competitions={country.competitions} />
      </li>
    ))}
  </ol>
)

const SportsComponent = (props) => (
  <ol>
    {props.sports.map((sport, idx) => (
      <li key={idx}>
        <p>{sport.name}</p>
        <CountriesComponent countries={sport.countries} />
      </li>
    ))}
  </ol>
)

const MainComponent = (props) => (
  <div>
    <h3>Size: {props.sports.length}</h3>
    <h3>Sports:</h3>
    <SportsComponent sports={props.sports} />
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
