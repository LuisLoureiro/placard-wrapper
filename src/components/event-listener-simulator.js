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
      window.addEventListener(this.state.eventName, ({ detail }) => {
        const betToInsert = {
          code: detail.event.code,
          home: detail.event.home,
          away: detail.event.away,
          name: detail.betType,
          odd: detail.odd
        }
        const copyOfSelectedBets = this.state.selectedBets.concat()
        const idx = copyOfSelectedBets.findIndex(
          bet => bet.code === detail.event.code
        )

        if (idx !== -1) {
          // replace existing one
          copyOfSelectedBets.splice(idx, 1, betToInsert)
        } else {
          copyOfSelectedBets.push(betToInsert)
        }

        this.setState({
          selectedBets: copyOfSelectedBets
        })
      })
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
