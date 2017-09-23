import { combineReducers } from 'redux'

import betsSelectedReducer from './reducers/betsSelected'
import eventsReducer from './reducers/events'
import hideValuesReducer from './reducers/hideValues'
import sportsReducer from './reducers/sports'

export default combineReducers({
  betsSelected: betsSelectedReducer,
  events: eventsReducer,
  hideValues: hideValuesReducer,
  sports: sportsReducer
})
