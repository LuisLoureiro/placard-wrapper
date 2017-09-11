export const GET_EVENTS = 'GET-EVENTS'
export const SET_EVENTS = 'SET-EVENTS'

export const getEvents = () => ({
  type: GET_EVENTS
})

export const setEvents = (events) => ({
  type: SET_EVENTS,
  events
})
