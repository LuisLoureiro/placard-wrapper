import React from 'react'

export default (props) => (
  <table>
    <tbody>
      {props.bets.map((bet, idx) => (
        <tr key={idx}>
          <td>{bet.name}</td>
          <td>
            <BetButton betName={bet.name} odd={bet.home} />
          </td>
          {bet.draw.name && <td>
            <BetButton betName={bet.name} odd={bet.draw} />
          </td>}
          <td>
            <BetButton betName={bet.name} odd={bet.away} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

const BetButton = ({ odd, betName }) => (
  <button
    data-betname={betName}
    data-odd-name={odd.name}
    data-odd-value={odd.value}>
    <span>{odd.value}</span>
  </button>
)
