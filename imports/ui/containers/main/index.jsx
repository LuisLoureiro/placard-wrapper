import { connect } from 'react-redux'

import Main from '../../components/main/index'

const mapStateToProps = state => ({ events: state.events })

export default connect(mapStateToProps)(Main)
