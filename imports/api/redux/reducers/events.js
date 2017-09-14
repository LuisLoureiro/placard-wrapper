import {
  GET_EVENTS,
  SET_EVENTS
} from '../actions/events'

const eventsInitialState = {
  events: []
}

export default (state = eventsInitialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return state.events

    case SET_EVENTS:
      return Object.assign({}, state, {
        events: action.events || []
      })

    default:
      return state
  }
}
