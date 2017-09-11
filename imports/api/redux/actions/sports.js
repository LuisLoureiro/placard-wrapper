export const GET_SPORTS = 'GET-SPORTS'
export const SET_SPORTS = 'SET-SPORTS'

export const getSports = () => ({
  type: GET_SPORTS
})
export const setSports = (sports) => ({
  type: SET_SPORTS,
  sports
})
