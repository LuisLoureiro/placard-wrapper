import {
  GET_EVENTS,
  SET_EVENTS
} from '../actions/events'

const eventsInitialState = []

export default (state = eventsInitialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return state

    case SET_EVENTS:
      return action.events || state

    default:
      return state
  }
}
