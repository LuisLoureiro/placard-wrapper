import React from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import HeaderContainerConnected from '../../ui/containers/sports/index'
import MainContainerConnected from '../../ui/containers/events/index'
import BetsSelectedContainer from '../../ui/containers/betsSelected/index'
import BetsSelectedBox from '../../ui/containers/betsSelectedBox/index'

const browserHistory = createBrowserHistory()

export const renderRoutes = (dispatch) => (
  <Router history={browserHistory}>
    <div>
      <Route component={HeaderContainerConnected(dispatch)} />
      <Route path='/:sport?/:country?' component={MainContainerConnected(dispatch)} />
      <BetsSelectedBox>
        <BetsSelectedContainer />
      </BetsSelectedBox>
    </div>
  </Router>
)
