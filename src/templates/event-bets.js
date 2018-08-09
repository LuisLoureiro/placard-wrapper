import React from 'react'

export default ({ betTypes }) => (
  <table>
    <tbody>
      {
        betTypes.map((betType, idx) => (
          <tr key={idx}>
            <th>{ betType.name }</th>
            <td>
              {
                betType.options.map((option, idx) => (
                  <table key={idx}>
                    <tr>
                      {
                        option.map((nameValue, idx) => (
                          <td key={idx}>
                            <button type='button' title={nameValue.name}>{ nameValue.value }</button>
                          </td>
                        ))
                      }
                    </tr>
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
