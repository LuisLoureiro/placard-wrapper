import React from 'react'

export default (children, childrenProps) => (
  React.Children.map(children,
    child => React.cloneElement(child, childrenProps))
)
