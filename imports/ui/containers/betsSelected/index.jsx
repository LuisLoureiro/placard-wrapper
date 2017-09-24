import { connect } from 'react-redux'

import BetsSelected from '../../components/betsSelected/index'
import { updateBetsSelected } from '../../../api/redux/actions/betsSelected'

const mapStateToProps = state => ({
  betsSelected: state.betsSelected
})

const mapDispatchToProps = dispatch => ({
  removeOne: bet => dispatch(updateBetsSelected(bet))
})

export default connect(mapStateToProps, mapDispatchToProps)(BetsSelected)
