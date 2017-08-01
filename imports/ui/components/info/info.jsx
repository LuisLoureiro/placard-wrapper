import React, { Component } from 'react'

export default class Info extends Component {
  render () {
    return (
      <section className='info'>
        <h2>Learn Meteor!</h2>
        <ul>
          <li><a href='https://www.meteor.com/try' target='_blank'>Do the Tutorial</a></li>
          <li><a href='http://guide.meteor.com' target='_blank'>Follow the Guide</a></li>
          <li><a href='https://docs.meteor.com' target='_blank'>Read the Docs</a></li>
          <li><a href='https://forums.meteor.com' target='_blank'>Discussions</a></li>
        </ul>
      </section>
    )
  }
}
