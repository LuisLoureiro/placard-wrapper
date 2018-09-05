import React from 'react'

import InfiniteScrollLink from './infinite-scroll-link'

export default class ComponentRenderer extends React.Component {
  constructor (props) {
    super(props)

    this.state = this.buildStateObject(props)
    this.loadMore = this.loadMore.bind(this)
    this.showLoadMoreButton = this.showLoadMoreButton.bind(this)
  }

  componentWillReceiveProps (newProps) {
    if (this.props.location.key !== newProps.location.key) {
      this.setState(this.buildStateObject(newProps))
    }
  }

  buildStateObject (props) {
    const {
      pathContext
    } = props.pageResources.json

    return {
      pageNumber: (pathContext.skip / pathContext.limit) + 1,
      pageResources: [props.pageResources],
      numberOfPages: pathContext.numberOfPages,
      url: buildPath(pathContext)
    }
  }

  loadMore (pathname) {
    this.props.loader.getResourcesForPathname(pathname, newPageResources => {
      this.setState({
        pageResources: this.state.pageResources.concat(newPageResources),
        pageNumber: this.state.pageNumber + 1
      })
    })
  }

  showLoadMoreButton () {
    return this.state.pageNumber < this.state.numberOfPages
  }

  render () {
    return (
      <main>
        {
          this.state.pageResources.map((pageResources, idx) =>
            React.createElement(pageResources.component, { ...pageResources.json, key: idx })
          )
        }
        {
          this.showLoadMoreButton() ? (
            <InfiniteScrollLink
              path={this.state.url}
              pageNumber={this.state.pageNumber}
              callback={this.loadMore}
              linkName='Carregar mais eventos' />
          ) : null
        }
      </main>
    )
  }
}

const buildPath = ({sport, country}) => {
  return `${sport ? `/${sport}` : ''}${country ? `/${country}` : ''}`
}
