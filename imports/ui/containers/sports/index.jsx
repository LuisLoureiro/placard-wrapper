import { withTracker } from '../tracker'
import { setSports as setSportsAction } from '../../../api/redux/actions/sports'
import SportsAPI from '../../../api/sports'
import HeaderContainer from '../header/index'

export default (dispatch) => withTracker(updateSports(dispatch), 'sports.all')(HeaderContainer)

function updateSports (dispatch) {
  return () => dispatch(setSportsAction(SportsAPI.getAll().fetch()))
}
