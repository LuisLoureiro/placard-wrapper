import { onPageLoad } from 'meteor/server-render'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'

import withProvider from '../both/withProvider'
import routes from './routes'
import mainReducer from '../../api/redux/reducers'
import eventsAPI from '../../api/events'
import sportsAPI from '../../api/sports'

import '../../api/sports/server/publications'
import '../../api/events/server/publications'

onPageLoad(sink => {
  const url = sink.request.url
  const initialState = {
    events: eventsAPI.getBySportAndCountry(url.pathname.split('/')[1], url.pathname.split('/')[2]).fetch(),
    sports: sportsAPI.getAll().fetch()
  }
  const store = createStore(mainReducer, initialState)

  sink.renderIntoElementById('app', renderToString(withProvider(store, routes(url))))

  sink.appendToBody(`
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}
    </script>
  `)
})
