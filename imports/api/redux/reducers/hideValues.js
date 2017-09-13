import {
  SET_HIDE_COUNTRY,
  SET_HIDE_SPORT
} from '../actions/hideValues'

const initialState = {
  hideCountry: false,
  hideSport: false
}

export default (state = initialState, action) => {
  switch (action) {
    case SET_HIDE_COUNTRY:
      return Object.assign({}, state, {
        hideCountry: action.hide
      })

    case SET_HIDE_SPORT:
      return Object.assign({}, state, {
        hideSport: action.hide
      })

    default:
      return state
  }
}
