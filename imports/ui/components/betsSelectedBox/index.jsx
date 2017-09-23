import React, { Component } from 'react'

export default class BetsSelectedBox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      minimized: true
    }

    this.changeMinimized = this.changeMinimized.bind(this)
  }

  changeMinimized () {
    this.setState({
      minimized: !this.state.minimized
    })
  }

  render () {
    return (
      <aside>
        <header>
          <p>
            <span>SIMULADOR</span>
            <button
              className={this.state.minimized ? 'to-right rotate-180' : 'to-right'}
              onClick={this.changeMinimized}>V</button>
          </p>
        </header>
        <main className={this.state.minimized ? 'minimized' : 'maximized'}>
          {this.props.children}
        </main>
        <footer className={this.state.minimized ? 'minimized' : 'maximized'}>
          <button onClick={this.props.clearList}>Limpar</button>
        </footer>
      </aside>
    )
  }

}
