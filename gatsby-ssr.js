import React from 'react'

import Layout from './src/components/layout'

export const wrapPageElement = ({ element, props }) => {
  if (props.pageContext.skip === 0) {
    // With layout
    return <Layout>{element}</Layout>
  }
  return element
}
