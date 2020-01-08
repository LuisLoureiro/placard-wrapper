import React from 'react'
import style from './simulator.module.styl'

export default ({ betting = [] }) => (
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
      {betting.map(bet => (
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
            <button>x</button>
          </td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan='2'>
          <button>Limpar</button>
          <span className={style.toRight}>
            Total:
            <span className={style.bold}>
              {betting.reduce((prev, curr) => prev + curr.odd, 0)}
            </span>
          </span>
        </td>
      </tr>
    </tfoot>
  </table>
)
