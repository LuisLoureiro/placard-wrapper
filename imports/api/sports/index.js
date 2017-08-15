import { Mongo } from 'meteor/mongo'

export const Sports = new Mongo.Collection('sportsAndCountries')
export default Sports

Sports.deny({
  insert () { return true },
  update () { return true },
  remove () { return true }
})

Sports.getAll = function () {
  return Sports.find({})
}
