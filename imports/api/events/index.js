import { Mongo } from 'meteor/mongo'

export const Events = new Mongo.Collection('events')
export default Events

Events.deny({
  insert () { return true },
  update () { return true },
  remove () { return true }
})

Events.getAll = function () {
  return findWithDefaultSort()
}

Events.getAllForNext24Hours = function () {
  const date = new Date()

  date.setHours(date.getHours() + 24)

  return findWithDefaultSort({
    date: { $lte: date.valueOf() }
  })
}

function findWithDefaultSort (filter) {
  const defaultSort = {
    sort: { 'date': 1 }
  }
  return Events.find(filter || {}, defaultSort)
}
