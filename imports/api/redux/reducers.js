import { combineReducers } from 'redux'

import eventsReducer from './reducers/events'
import hideValuesReducer from './reducers/hideValues'
import sportsReducer from './reducers/sports'

export default combineReducers({
  events: eventsReducer,
  hideValues: hideValuesReducer,
  sports: sportsReducer
})
