import React from 'react'

export default class HelloWorld extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0
    }
    // This binding is necessary to make `this` work in the callback
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick () {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
  }

  render () {
    return (
      <section className='hello'>
        <h1>{ this.props.title }</h1>
        <button onClick={this.handleButtonClick}>Click Me</button>
        <p>You've pressed the button { this.state.counter } times.</p>
      </section>
    )
  }
}
