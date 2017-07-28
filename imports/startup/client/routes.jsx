import React from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

// route components
import AppContainer from '../../ui/layouts/app.jsx'

const browserHistory = createBrowserHistory()

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path='/' component={AppContainer} />
    </div>
  </Router>
)
