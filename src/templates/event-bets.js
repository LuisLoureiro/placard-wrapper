import React from 'react'

import styles from './event-bets.module.styl'

export default ({ betTypes }) => (
  <table className={styles.betsTable}>
    <tbody>
      {
        betTypes.map((betType, idx) => (
          <tr key={idx}>
            <th>{ betType.name }</th>
            <td>
              {
                betType.options.map((option, idx) => (
                  <table key={idx}>
                    <tbody>
                      <tr>
                        {
                          option.map((nameValue, idx) => (
                            <td key={idx}>
                              <button type='button' title={nameValue.name}>{ nameValue.value }</button>
                            </td>
                          ))
                        }
                      </tr>
                    </tbody>
                  </table>
                ))
              }
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
)
