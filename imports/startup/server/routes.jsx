import React from 'react'
import { StaticRouter, Route } from 'react-router'
import { connect } from 'react-redux'

// route components
import Header from '../../ui/components/header/index'
import Main from '../../ui/components/main/index'

export default (location) => (
  <StaticRouter location={location} context={{}}>
    <div>
      <Route component={HeaderContainer} />
      <Route path='/:sport?/:country?' component={MainContainer} />
    </div>
  </StaticRouter>
)

const HeaderContainer = connect(state => ({ sports: state.sports }))(Header)

const MainContainer = connect(state => ({ events: state.events }))(Main)
