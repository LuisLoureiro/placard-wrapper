import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import AppContainer from '../../ui/layouts/app.jsx'

import './routes'

Meteor.startup(() => {
  render(<AppContainer />, document.getElementById('app'))
})
