import React from 'react'
import { Provider } from 'react-redux'

export default (store, router) => (
  <Provider store={store}>
    {router}
  </Provider>
)
