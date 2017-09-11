import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { createStore } from 'redux'

import { renderRoutes } from './routes.jsx'
import withProvider from '../both/withProvider'
import mainReducer from '../../api/redux/reducers'

Meteor.startup(() => {
  const store = createStore(mainReducer, window.__PRELOADED_STATE__)

  delete window.window.__PRELOADED_STATE__

  render(withProvider(store, renderRoutes()), document.getElementById('app'))
})
