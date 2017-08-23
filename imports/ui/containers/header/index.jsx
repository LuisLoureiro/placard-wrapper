import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import Header from '../../components/header/index'

import SportsAPI from '../../../api/sports'

export default createContainer(props => {
  const allSportsHandle = Meteor.subscribe('sports.all')
  const allSports = SportsAPI.getAll()

  return {
    loadingSports: !allSportsHandle.ready(),
    sports: allSports.fetch()
  }
}, Header)
