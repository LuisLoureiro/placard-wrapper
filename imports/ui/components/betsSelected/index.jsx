import React from 'react'

export default (props) => (
  <tbody>
    {props.betsSelected.map((bet, idx) => (
      <tr key={idx}>
        <td>
          <p className='bold'>
            <span>{bet.code}</span>
            <span>{bet.home} X {bet.away}</span>
          </p>
          <p>
            <span>{bet.odd.name}</span>
            <span className='bold'>{bet.odd.value}</span>
          </p>
        </td>
        <td>
          <button className='to-right' onClick={e => props.removeOne(bet)}>
            <span className='bold'>X</span>
          </button>
        </td>
      </tr>
    ))}
  </tbody>
)
