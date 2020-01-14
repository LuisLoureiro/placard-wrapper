import React from 'react'
import Simulator from './simulator'

class EventListenerSimulator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      eventName: props.eventName,
      selectedBets: []
    }
    this.handleOnSelectedBetsCleared = this.handleOnSelectedBetsCleared.bind(this)
    this.handleOnSelectedBetRemoved = this.handleOnSelectedBetRemoved.bind(this)
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

  handleOnSelectedBetsCleared () {
    this.setState({
      selectedBets: []
    })
  }

  handleOnSelectedBetRemoved (betToRemove) {
    const filteredSelectedBets = this.state.selectedBets.filter(
      bet => bet.code !== betToRemove.code
    )

    if (filteredSelectedBets.length < this.state.selectedBets.length) {
      this.setState({
        selectedBets: filteredSelectedBets
      })
    }
  }

  render () {
    return (
      <Simulator
        selectedBets={this.state.selectedBets}
        onSelectedBetsCleared={this.handleOnSelectedBetsCleared}
        onSelectedBetRemoved={this.handleOnSelectedBetRemoved}
      />
    )
  }
}

EventListenerSimulator.defaultProps = {
  eventName: null
}

export default EventListenerSimulator
