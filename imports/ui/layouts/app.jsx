import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import { Sports } from '../../api/sports'

const BetBlock = (props) => (
  <p>
    <span>{props.bet.name}</span>
    <span> - {props.bet.home.value}</span>
    {props.bet.draw.name && <span> | {props.bet.draw.value}</span>}
    <span> | {props.bet.away.value}</span>
  </p>
)

const BetsBlock = (props) => (
  <ol>
    {props.bets.map(bet => (
      <li>
        <BetBlock bet={bet} />
      </li>
    ))}
  </ol>
)

const EventBlock = (props) => (
  <div>
    <p>
      <span>{props.event.code}</span>
      <span> - {props.event.date.toLocaleString()}</span>
      <span> - {props.event.home} X {props.event.away}</span>
    </p>
    <BetsBlock bets={props.event.bets} />
  </div>
)

const EventsBlock = (props) => (
  <ol>
    {props.events.map(event => (
      <li>
        <EventBlock event={event} />
      </li>
    ))}
  </ol>
)

const CompetitionBlock = (props) => (
  <div>
    <p>{props.competition.name}</p>
    <EventsBlock events={props.competition.events} />
  </div>
)

const CompetitionsBlock = (props) => (
  <ol>
    {props.competitions.map(competition => (
      <li>
        <CompetitionBlock competition={competition} />
      </li>
    ))}
  </ol>
)

const CountryBlock = (props) => (
  <div>
    <p>
      <span>{props.country.name}</span> - <span>{props.country.url}</span>
    </p>
    <CompetitionsBlock competitions={props.country.competitions} />
  </div>
)

const CountriesBlock = (props) => (
  <ol>
    {props.countries.map(country => (
      <li>
        <CountryBlock country={country} />
      </li>
    ))}
  </ol>
)

const SportBlock = (props) => (
  <div>
    <p>{props.sport.name}</p>
    <CountriesBlock countries={props.sport.countries} />
  </div>
)

const SportsBlock = (props) => (
  <ol>
    {props.sports.map(sport => (
      <li>
        <SportBlock sport={sport} />
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
