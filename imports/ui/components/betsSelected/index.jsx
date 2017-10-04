import React from 'react'

export default (props) => (
  <tbody>
    {props.betsSelected.map((bet, idx) => (
      <tr key={idx}>
        <td>
          <p className='bold'>
            <small>{bet.code}</small>
            <small>{bet.home} X {bet.away}</small>
          </p>
          <p className='align-center'>
            <small><u>{bet.betName}</u></small>
            <span>{bet.odd.name}</span>
            <span className='bold'>{bet.odd.value}</span>
          </p>
        </td>
        <td className='align-center'>
          <button onClick={e => props.removeOne(bet)}>x</button>
        </td>
      </tr>
    ))}
  </tbody>
)
