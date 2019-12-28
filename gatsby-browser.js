import React from 'react'

import ComponentRenderer from './src/templates/component-renderer-with-pagination'

export default {
  replaceComponentRenderer: ({ props, loader }) => {
    if (props.layout) {
      return null
    }

    return <ComponentRenderer {...props} loader={loader} />
  }
}
