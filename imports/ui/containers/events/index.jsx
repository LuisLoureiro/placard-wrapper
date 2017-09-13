import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { connect } from 'react-redux'

import { setEvents as setEventsAction } from '../../../api/redux/actions/events'
import EventsAPI from '../../../api/events'
import Main from '../../../ui/components/main/index'

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = dispatch => ({ dispatchEvents: (events) => dispatch(setEventsAction(events)) })

export const MainContainer = createContainer(props => {
  const country = props.match.params.country
  const sport = props.match.params.sport
  const handle = Meteor.subscribe('events.getBySportAndCountry', sport, country)

  if (handle.ready()) {
    props.dispatchSports(EventsAPI.getBySportAndCountry(sport, country).fetch())
  }

  return {
    events: props.events
  }
}, Main)

export const MainContainerConnected = connect(mapStateToProps, mapDispatchToProps)(MainContainer)

export default {
  MainContainerConnected,
  MainContainer
}
