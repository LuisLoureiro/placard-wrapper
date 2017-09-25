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
        <table className={this.state.minimized ? 'minimized' : ''}>
          <thead>
            <tr>
              <th>SIMULADOR</th>
              <th>
                <button className={this.state.minimized ? 'to-right rotate-180' : 'to-right'}
                  onClick={this.changeMinimized}>
                  <span>V</span>
                </button>
              </th>
            </tr>
          </thead>
          {this.props.children}
          <tfoot>
            <tr>
              <td>
                <button onClick={this.props.clearList}>
                  <span>Limpar</span>
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </aside>
    )
  }

}
