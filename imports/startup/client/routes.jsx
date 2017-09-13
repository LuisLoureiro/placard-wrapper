import React from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { HeaderContainerConnected } from '../../ui/containers/sports/index'
import { MainContainerConnected } from '../../ui/containers/events/index'

const browserHistory = createBrowserHistory()

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route component={HeaderContainerConnected} />
      <Route path='/:sport?/:country?' component={MainContainerConnected} />
    </div>
  </Router>
)
