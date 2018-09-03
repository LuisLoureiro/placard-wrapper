import React from 'react'

exports.replaceComponentRenderer = ({ props, loader }) => {
  if (props.layout) {
    return null
  }

  return React.createElement(props.pageResources.component, props.pageResources.json)
}
