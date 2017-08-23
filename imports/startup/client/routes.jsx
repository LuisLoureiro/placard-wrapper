import React from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

// route components
import HeaderContainer from '../../ui/containers/header/index'
import MainContainer from '../../ui/containers/main/index'

const browserHistory = createBrowserHistory()

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route component={HeaderContainer} />
      <Route path='/:sport?/:country?' component={MainContainer} />
    </div>
  </Router>
)
