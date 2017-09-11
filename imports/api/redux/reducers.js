import { combineReducers } from 'redux'

import eventsReducer from './reducers/events'
import sportsReducer from './reducers/sports'

export default combineReducers({
  events: eventsReducer,
  sports: sportsReducer
})
