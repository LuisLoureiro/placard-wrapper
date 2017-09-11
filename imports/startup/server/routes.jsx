import React from 'react'
import { StaticRouter } from 'react-router'

import routes from '../both/routes'

export default (location) => (
  <StaticRouter location={location} context={{}}>
    {routes}
  </StaticRouter>
)
