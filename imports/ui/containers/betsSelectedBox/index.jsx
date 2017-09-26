import { connect } from 'react-redux'

import BetsSelectedBox from '../../components/betsSelectedBox/index'
import { cleanBetsSelected } from '../../../api/redux/actions/betsSelected'

const mapStateToProps = state => ({
  total: state.betsSelected.total
})

const mapDispatchToProps = dispatch => ({
  clearList: () => dispatch(cleanBetsSelected())
})

export default connect(mapStateToProps, mapDispatchToProps)(BetsSelectedBox)
