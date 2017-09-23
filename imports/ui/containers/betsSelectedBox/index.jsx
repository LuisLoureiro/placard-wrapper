import { connect } from 'react-redux'

import BetsSelectedBox from '../../components/betsSelectedBox/index'
import { cleanBetsSelected } from '../../../api/redux/actions/betsSelected'

const mapDispatchToProps = dispatch => ({
  clearList: () => dispatch(cleanBetsSelected())
})

export default connect(null, mapDispatchToProps)(BetsSelectedBox)
