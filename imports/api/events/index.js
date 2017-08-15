import { Mongo } from 'meteor/mongo'

export const Events = new Mongo.Collection('events')
export default Events

Events.deny({
  insert () { return true },
  update () { return true },
  remove () { return true }
})

Events.getAll = function () {
  return Events.find({})
}
