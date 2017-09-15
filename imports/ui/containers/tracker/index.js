import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

export const withTracker = (onReadyCallback, ...subscriptionArgs) => (component) => {
  Tracker.autorun(() => {
    const handle = Meteor.subscribe.apply(null, subscriptionArgs)

    if (handle.ready()) {
      onReadyCallback()
    }
  })

  return component
}
