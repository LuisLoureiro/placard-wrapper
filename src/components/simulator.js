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
    </tbody>
    <tfoot>
      <tr>
        <td colSpan='2'>
          <button>Limpar</button>
          <span className={style.toRight}>
            Total:<span className={style.bold}>0</span>
          </span>
        </td>
      </tr>
    </tfoot>
  </table>
)
