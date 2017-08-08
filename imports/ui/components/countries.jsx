import React from 'react'

const cloneChildren = (children, childrenProps) => (
  React.Children.map(children,
    child => React.cloneElement(child, childrenProps))
)

export default (props) => (
  <ol>
    {props.countries.map((country, idx) => (
      <li key={idx}>
        <p>
          <span>{country.name}</span> - <span>{country.url}</span>
        </p>
        {cloneChildren(props.children, {
          competitions: country.competitions
        })}
      </li>
    ))}
  </ol>
)
