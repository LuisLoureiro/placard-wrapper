import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import Hello from '../components/hello/hello.jsx'
import Info from '../components/info/info.jsx'

const App = (props) => (
  <section>
    <Hello title={props.title} />
    <Info />
  </section>
)

export default createContainer(props => {
  return {
    title: 'Welcome to Meteor!'
  }
}, App)
