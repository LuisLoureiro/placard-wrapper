import React from 'react'

import ComponentRenderer from './src/components/component-renderer-with-pagination'

export const replaceComponentRenderer = ({ props, loader }) => {
  return <ComponentRenderer {...props} loader={loader} />
}




