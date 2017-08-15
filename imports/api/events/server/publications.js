import { Meteor } from 'meteor/meteor'

import { Events } from '../index'

Meteor.publish('events.all', function () {
  return Events.getAll()
})
