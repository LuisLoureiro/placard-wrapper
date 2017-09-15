import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from '../../components/header/index'

const mapStateToProps = state => ({ sports: state.sports, navButtonClick: scrollSports })

export default withRouter(connect(mapStateToProps)(Header))

function scrollSports (direction, scrollElement) {
  const MULTIPLIER = 50

  if (!scrollElement || !('scrollLeft' in scrollElement) || (direction !== -1 && direction !== 1)) {
    return false
  }

  scrollElement.scrollLeft += (MULTIPLIER * direction)
}
