import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { connect } from 'react-redux'

import { setSports as setSportsAction } from '../../../api/redux/actions/sports'
import SportsAPI from '../../../api/sports'
import Header from '../../../ui/components/header/index'

const mapStateToProps = state => ({ sports: state.sports, navButtonClick: scrollSports })
const mapDispatchToProps = dispatch => ({ dispatchSports: (sports) => dispatch(setSportsAction(sports)) })

export const HeaderContainer = createContainer(props => {
  const handle = Meteor.subscribe('sports.all')

  if (handle.ready()) {
    props.dispatchSports(SportsAPI.getAll().fetch())
  }

  return {
    navButtonClick: props.navButtonClick,
    sports: props.sports
  }
}, Header)

export const HeaderContainerConnected = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

export default {
  HeaderContainerConnected,
  HeaderContainer
}

function scrollSports (direction, scrollElement) {
  const MULTIPLIER = 50

  if (!scrollElement || !('scrollLeft' in scrollElement) || (direction !== -1 && direction !== 1)) {
    return false
  }

  scrollElement.scrollLeft += (MULTIPLIER * direction)
}
