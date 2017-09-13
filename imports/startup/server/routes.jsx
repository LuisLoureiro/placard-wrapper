import React from 'react'
import { StaticRouter, Route } from 'react-router'

// route components
import HeaderContainer from '../../ui/containers/header/index'
import MainContainer from '../../ui/containers/main/index'

export default (location) => (
  <StaticRouter location={location} context={{}}>
    <div>
      <Route component={HeaderContainer} />
      <Route path='/:sport?/:country?' component={MainContainer} />
    </div>
  </StaticRouter>
)
