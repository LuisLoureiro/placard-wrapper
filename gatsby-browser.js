import React from 'react'

import ComponentRenderer from './src/components/component-renderer-with-pagination'

export const replaceComponentRenderer = ({ props, loader }) => {
  if (props.layout) {
    return null
  }

  return <ComponentRenderer {...props} loader={loader} />
}
