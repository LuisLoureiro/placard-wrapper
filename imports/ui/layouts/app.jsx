import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import { Sports } from '../../api/sports'

const BetsBlock = (props) => (
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

const EventsBlock = (props) => (
  <ol>
    {props.events.map((event, idx) => (
      <li key={idx}>
        <p>
          <span>{event.code}</span>
          <span> - {event.date.toLocaleString()}</span>
          <span> - {event.home} X {event.away}</span>
        </p>
        <BetsBlock bets={event.bets} />
      </li>
    ))}
  </ol>
)

const CompetitionsBlock = (props) => (
  <ol>
    {props.competitions.map((competition, idx) => (
      <li key={idx}>
        <p>{competition.name}</p>
        <EventsBlock events={competition.events} />
      </li>
    ))}
  </ol>
)

const CountriesBlock = (props) => (
  <ol>
    {props.countries.map((country, idx) => (
      <li key={idx}>
        <p>
          <span>{country.name}</span> - <span>{country.url}</span>
        </p>
        <CompetitionsBlock competitions={country.competitions} />
      </li>
    ))}
  </ol>
)

const SportsBlock = (props) => (
  <ol>
    {props.sports.map((sport, idx) => (
      <li key={idx}>
        <p>{sport.name}</p>
        <CountriesBlock countries={sport.countries} />
      </li>
    ))}
  </ol>
)

const MainBlock = (props) => (
  <div>
    <h3>Size: {props.sports.length}</h3>
    <h3>Sports:</h3>
    <SportsBlock sports={props.sports} />
  </div>
)

const App = (props) => (
  <section>
    { !props.loading && <MainBlock sports={props.sports} /> }
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
