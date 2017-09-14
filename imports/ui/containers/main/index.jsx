import { connect } from 'react-redux'

import Main from '../../components/main/index'

const mapStateToProps = state => ({
  events: state.events,
  hideCountry: state.hideValues.hideCountry,
  hideSport: state.hideValues.hideSport
})

export default connect(mapStateToProps)(Main)
