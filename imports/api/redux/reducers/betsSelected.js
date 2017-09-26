import {
  CLEAN_BETS_SELECTED,
  UPDATE_BETS_SELECTED
} from '../actions/betsSelected'

const initialState = {
  selected: [],
  total: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BETS_SELECTED:
      const selectedLength = state.selected.length
      const newSelected = state.selected.filter(current => current.code !== action.event.code)

      if (newSelected.length === selectedLength) {
        newSelected.push({
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

      const newTotal = newSelected.reduce((previous, current) => (
        (previous || 1) * parseOdd(current.odd.value)
      ), 0).toFixed(2)

      return Object.assign({}, state, {
        selected: newSelected,
        total: newTotal
      })

    case CLEAN_BETS_SELECTED:
      return initialState

    default:
      return state
  }
}

function parseOdd (valueString) {
  return Number.parseFloat((valueString || '').replace(/,/g, '.'))
}
