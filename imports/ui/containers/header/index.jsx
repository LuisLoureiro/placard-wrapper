import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import Header from '../../components/header/index'

import SportsAPI from '../../../api/sports'

export default createContainer(props => {
  const allSportsHandle = Meteor.subscribe('sports.all')
  const allSports = SportsAPI.getAll()

  return {
    loadingSports: !allSportsHandle.ready(),
    sports: allSports.fetch(),
    navButtonClick: scrollSports
  }
}, Header)

function scrollSports (direction, scrollElement) {
  const MULTIPLIER = 50

  if (!scrollElement || !('scrollLeft' in scrollElement) || (direction !== -1 && direction !== 1)) {
    return false
  }

  scrollElement.scrollLeft += (MULTIPLIER * direction)
}
