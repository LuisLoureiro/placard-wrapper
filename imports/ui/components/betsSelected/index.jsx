import React from 'react'

export default (props) => (
  <tbody>
    {props.betsSelected.map((bet, idx) => (
      <tr key={idx}>
        <td>
          <small className='bold'>
            <span>{bet.code}</span>
            <span>{bet.home} X {bet.away}</span>
          </small>
          <p className='align-center'>
            <span>{bet.odd.name}</span>
            <span className='bold'>{bet.odd.value}</span>
          </p>
        </td>
        <td className='align-center'>
          <button onClick={e => props.removeOne(bet)}>
            <span>x</span>
          </button>
        </td>
      </tr>
    ))}
  </tbody>
)
