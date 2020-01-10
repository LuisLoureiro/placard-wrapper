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
            <SelectedBetRow
              key={bet.code}
              onRemoveHandler={() => this.props.onSelectedBetRemoved(bet)}
              {...bet}
            />
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

function SelectedBetRow ({ code, home, away, name, odd, onRemoveHandler }) {
  return (
    <tr key>
      <td>
        <p className={style.bold}>
          <small>{code}</small>
          <small>
            {home} X {away}
          </small>
        </p>
        <p className={style.alignCenter}>
          <small>
            <u>{name}</u>
          </small>
          <span>{odd.name}</span>
          <span className={style.bold}>{odd.value}</span>
        </p>
      </td>
      <td className={style.alignCenter}>
        <button onClick={onRemoveHandler}>X</button>
      </td>
    </tr>
  )
}
