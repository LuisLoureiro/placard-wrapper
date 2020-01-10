import React from 'react'
import style from './simulator.module.styl'

class Simulator extends React.Component {
  constructor (props) {
    super(props)
    this.state = { minimized: false }

    this.handleChangedMinimized = this.handleChangedMinimized.bind(this)
  }

  handleChangedMinimized () {
    this.setState({ minimized: !this.state.minimized })
  }

  render () {
    return (
      <table
        className={`${style.simulator} ${
          this.state.minimized ? style.minimized : ''
        }`}
      >
        <thead>
          <tr>
            <th colSpan='2'>
              <button onClick={this.handleChangedMinimized}>
                <span className={style.toLeft}>SIMULADOR</span>
                <span
                  className={`${
                    this.state.minimized ? style.rotate225 : style.rotate315
                  } ${style.toRight}`}
                >
                  V
                </span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.selectedBets.map(bet => (
            <tr key>
              <td>
                <p className={style.bold}>
                  <small>{bet.code}</small>
                  <small>
                    {bet.home} X {bet.away}
                  </small>
                </p>
                <p className={style.alignCenter}>
                  <small>
                    <u>{bet.name}</u>
                  </small>
                  <span>{bet.odd.name}</span>
                  <span className={style.bold}>{bet.odd.value}</span>
                </p>
              </td>
              <td className={style.alignCenter}>
                <button onClick={() => this.props.onSelectedBetRemoved(bet)}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='2'>
              <button onClick={this.props.onSelectedBetsCleared}>Limpar</button>
              <span className={style.toRight}>
                Total:
                <span className={style.bold}>
                  {this.props.selectedBets.reduce(
                    (prev, curr) => prev + curr.odd.value,
                    0
                  )}
                </span>
              </span>
            </td>
          </tr>
        </tfoot>
      </table>
    )
  }
}

// Set default props
Simulator.defaultProps = {
  selectedBets: [],
  onSelectedBetRemoved: () => {},
  onSelectedBetsCleared: () => {}
}

export default Simulator
