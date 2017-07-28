import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import Hello from '../../ui/components/hello/hello.jsx'
import Info from '../../ui/components/info/info.jsx'

import './routes'

Meteor.startup(() => {
  render(
    <section>
      <Hello />
      <Info />
    </section>, document.getElementById('app'))
})
