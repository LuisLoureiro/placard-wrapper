import { Meteor } from 'meteor/meteor'

import { Events } from '../index'

Meteor.publish('events.all', function () {
  return Events.getAll()
})

Meteor.publish('events.next24Hours', function () {
  return Events.getAllForNext24Hours()
})

Meteor.publish('events.bySportAndCountry', function (sport, country) {
  return Events.getBySportAndCountry(sport, country)
})
