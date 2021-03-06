import React from 'react'

import ComponentRenderer from './src/components/component-renderer-with-pagination'
import Layout from './src/components/layout'

export const replaceComponentRenderer = ({ props, loader }) => {
  return <ComponentRenderer {...props} loader={loader} />
}

export const wrapPageElement = ({ element, props }) => {
  if (props.pageContext.skip === 0) {
    // With layout
    return <Layout>{element}</Layout>
  }
  return element
}
