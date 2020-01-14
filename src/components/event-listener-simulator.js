import React from 'react'
import Simulator from './simulator'

class EventListenerSimulator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      eventName: props.eventName,
      selectedBets: []
    }
  }

  componentDidMount () {
    if (this.state.eventName !== null) {
      window.addEventListener(this.state.eventName, ({ detail }) =>
        this.setState({
          selectedBets: this.state.selectedBets.concat({
            code: detail.event.code,
            home: detail.event.home,
            away: detail.event.away,
            name: detail.betType,
            odd: detail.odd
          })
        })
      )
    }
  }

  componentWillUnmount () {
    if (this.state.eventName !== null) {
      window.removeEventListener(this.state.eventName)
    }
  }

  render () {
    return (
      <Simulator selectedBets={this.state.selectedBets} />
    )
  }
}

EventListenerSimulator.defaultProps = {
  eventName: null
}

export default EventListenerSimulator
