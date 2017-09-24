import React from 'react'

export default (props) => (
  <ol>
    {props.betsSelected.map((bet, idx) => (
      <li key={idx}>
        <div>
          <p className='bold'>
            <span>{bet.code}</span>
            <span>{bet.home} X {bet.away}</span>
          </p>
          <p>
            <span>{bet.odd.name}</span>
            <span className='bold'>{bet.odd.value}</span>
          </p>
        </div>
        <button className='to-right' onClick={e => props.removeOne(bet)}>
          <span className='bold'>X</span>
        </button>
      </li>
    ))}
  </ol>
)
