export const UPDATE_BETS_SELECTED = 'UPDATE_BETS_SELECTED'
export const CLEAN_BETS_SELECTED = 'CLEAN_BETS_SELECTED'

export const updateBetsSelected = (event, betName, oddName, oddValue) => ({
  type: UPDATE_BETS_SELECTED,
  event,
  betName,
  oddName,
  oddValue
})

export const cleanBetsSelected = () => ({
  type: CLEAN_BETS_SELECTED
})
