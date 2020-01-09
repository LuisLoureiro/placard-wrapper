import React from 'react'
import style from './simulator.module.styl'

export default ({
  selectedBets = [],
  onSelectedBetsCleared = () => {},
  onSelectedBetRemoved = () => {}
}) => (
  <table className={`${style.simulator} ${style.minimized}`}>
    <thead>
      <tr>
        <th colSpan='2'>
          <button>
            <span className={style.toLeft}>SIMULADOR</span>
            <span className={`${style.rotate315} ${style.toRight}`}>V</span>
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      {selectedBets.map(bet => (
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
            <button onClick={() => onSelectedBetRemoved(bet)}>X</button>
          </td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan='2'>
          <button onClick={onSelectedBetsCleared}>Limpar</button>
          <span className={style.toRight}>
            Total:
            <span className={style.bold}>
              {selectedBets.reduce((prev, curr) => prev + curr.odd.value, 0)}
            </span>
          </span>
        </td>
      </tr>
    </tfoot>
  </table>
)
