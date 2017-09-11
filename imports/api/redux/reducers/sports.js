import {
  GET_SPORTS,
  SET_SPORTS
} from '../actions/sports'

const sportsInitialState = {
  sports: []
}

export default (state = sportsInitialState, action) => {
  switch (action) {
    case GET_SPORTS:
      return state.sports

    case SET_SPORTS:
      return Object.assign({}, state, {
        sports: action.sports || []
      })

    default:
      return state
  }
}
