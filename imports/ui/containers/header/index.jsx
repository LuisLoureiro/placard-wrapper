import { connect } from 'react-redux'

import Header from '../../components/header/index'

const mapStateToProps = state => ({ sports: state.sports, navButtonClick: scrollSports })

export default connect(mapStateToProps)(Header)

function scrollSports (direction, scrollElement) {
  const MULTIPLIER = 50

  if (!scrollElement || !('scrollLeft' in scrollElement) || (direction !== -1 && direction !== 1)) {
    return false
  }

  scrollElement.scrollLeft += (MULTIPLIER * direction)
}
