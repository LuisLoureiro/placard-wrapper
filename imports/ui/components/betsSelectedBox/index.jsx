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
                <button className={this.state.minimized ? 'rotate-225' : 'rotate-315'}
                  onClick={this.changeMinimized}>V</button>
              </th>
            </tr>
          </thead>
          {this.props.children}
          <tfoot>
            <tr>
              <td colSpan='2'>
                <button onClick={this.props.clearList}>Limpar</button>
                <span className='to-right'>Total: <span className='bold'>{this.props.total}</span></span>
              </td>
            </tr>
          </tfoot>
        </table>
      </aside>
    )
  }
}
