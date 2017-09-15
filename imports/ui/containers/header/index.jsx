import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from '../../components/header/index'

const mapStateToProps = state => ({ sports: state.sports })

export default withRouter(connect(mapStateToProps)(Header))
