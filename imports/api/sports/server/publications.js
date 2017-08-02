import { Meteor } from 'meteor/meteor'

import { Sports } from '../index'

Meteor.publish('sports.all', function () {
  return Sports.getAll()
})
