import React from 'react'

export default (props) => (
  <table>
    <tbody>
      {props.bets.map((bet, idx) => (
        <tr key={idx}>
          <td>{bet.name}</td>
          <td>{bet.home.value}</td>
          {bet.draw.name && <td>{bet.draw.value}</td>}
          <td>{bet.away.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
