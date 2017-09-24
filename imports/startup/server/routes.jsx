import React from 'react'
import { StaticRouter, Route } from 'react-router'

// route components
import HeaderContainer from '../../ui/containers/header/index'
import MainContainer from '../../ui/containers/main/index'
import BetsSelectedContainer from '../../ui/containers/betsSelected/index'
import BetsSelectedBox from '../../ui/containers/betsSelectedBox/index'

export default (location) => (
  <StaticRouter location={location} context={{}}>
    <div>
      <Route component={HeaderContainer} />
      <Route path='/:sport?/:country?' component={MainContainer} />
      <BetsSelectedBox>
        <BetsSelectedContainer />
      </BetsSelectedBox>
    </div>
  </StaticRouter>
)
