import {
  GET_SPORTS,
  SET_SPORTS
} from '../actions/sports'

const sportsInitialState = []

export default (state = sportsInitialState, action) => {
  switch (action.type) {
    case GET_SPORTS:
      return state

    case SET_SPORTS:
      return action.sports || state

    default:
      return state
  }
}
