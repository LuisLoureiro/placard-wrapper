import {
  CLEAN_BETS_SELECTED,
  UPDATE_BETS_SELECTED
} from '../actions/betsSelected'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BETS_SELECTED:
      const stateLength = state.length
      const newState = state.filter(current => current.code !== action.event.code)

      if (newState.length === stateLength) {
        newState.push({
          away: action.event.away,
          betName: action.betName,
          code: action.event.code,
          home: action.event.home,
          odd: {
            name: action.oddName,
            value: action.oddValue
          }
        })
      }

      return newState

    case CLEAN_BETS_SELECTED:
      return []

    default:
      return state
  }
}
