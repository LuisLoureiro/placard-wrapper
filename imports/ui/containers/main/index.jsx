import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Main from '../../components/main/index'
import { updateBetsSelected } from '../../../api/redux/actions/betsSelected'

const mapStateToProps = state => ({
  events: state.events,
  hideCountry: state.hideValues.hideCountry,
  hideSport: state.hideValues.hideSport
})

const mapDispatchToProps = dispatch => ({
  onEventClick: onEventClick.bind(null, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

function onEventClick (dispatch, syntheticEvent, event) {
  if (syntheticEvent.target.dataset.betname) {
    const {
      betname,
      oddName,
      oddValue
    } = syntheticEvent.target.dataset
    return dispatch(updateBetsSelected(event, betname, oddName, oddValue))
  }

  return syntheticEvent
}
