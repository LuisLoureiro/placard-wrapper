import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Main from '../../components/main/index'

const mapStateToProps = state => ({
  events: state.events,
  hideCountry: state.hideValues.hideCountry,
  hideSport: state.hideValues.hideSport
})

export default withRouter(connect(mapStateToProps)(Main))
