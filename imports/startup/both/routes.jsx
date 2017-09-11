import React from 'react'
import { Route } from 'react-router'

// route components
import HeaderContainer from '../../ui/containers/header/index'
import MainContainer from '../../ui/containers/main/index'

export default (
  <div>
    <Route component={HeaderContainer} />
    <Route path='/:sport?/:country?' component={MainContainer} />
  </div>
)
