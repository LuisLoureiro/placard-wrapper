import { Meteor } from 'meteor/meteor'

import { Events } from '../index'

Meteor.publish('events.bySportAndCountry', function (sport, country) {
  return Events.getBySportAndCountry(sport, country)
})
