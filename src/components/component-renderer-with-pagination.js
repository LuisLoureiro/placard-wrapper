import React from 'react'

import InfiniteScrollLink from './infinite-scroll-link'

export default class ComponentRenderer extends React.Component {
  constructor (props) {
    super(props)

    this.state = buildStateObject(props)
    this.loadMore = this.loadMore.bind(this)
    this.showLoadMoreButton = this.showLoadMoreButton.bind(this)
  }

  static getDerivedStateFromProps (props, state) {
    if (props.location.key !== state.currentLocationKey) {
      return buildStateObject(props)
    }

    return null
  }

  async loadMore (pathname) {
    const newPageResources = await this.props.loader.loadPage(pathname)
    this.setState({
      pageResources: this.state.pageResources.concat(newPageResources),
      pageNumber: this.state.pageNumber + 1
    })
  }

  showLoadMoreButton () {
    return this.state.pageNumber < this.state.numberOfPages
  }

  render () {
    return (
      <main>
        {this.state.pageResources.map((pageResources, idx) =>
          React.createElement(pageResources.component, {
            ...pageResources.json,
            key: idx
          })
        )}
        {this.showLoadMoreButton() ? (
          <InfiniteScrollLink
            path={this.state.url}
            pageNumber={this.state.pageNumber}
            callback={this.loadMore}
            linkName='Carregar mais eventos'
          />
        ) : null}
      </main>
    )
  }
}

const buildStateObject = props => {
  const { pageContext } = props.pageResources.json

  return {
    currentLocationKey: props.location.key,
    pageNumber: pageContext.skip / pageContext.limit + 1,
    pageResources: [props.pageResources],
    numberOfPages: pageContext.numberOfPages,
    url: buildPath(pageContext.filter)
  }
}

const buildPath = ({ sport, country }) => {
  return `${sport ? `/${sport.eq}` : ''}${country ? `/${country.eq}` : ''}`
}
