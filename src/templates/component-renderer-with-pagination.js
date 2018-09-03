import React from 'react'
import Link from 'gatsby-link'

export default class ComponentRenderer extends React.Component {
  constructor (props) {
    super(props)

    this.state = this.buildStateObject(props)
    this.loadMore = this.loadMore.bind(this)
    this.loadMoreURL = this.loadMoreURL.bind(this)
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
      pageNumber: 1,
      newPageResources: props.pageResources,
      numberOfPages: pathContext.numberOfPages,
      url: buildPath(pathContext)
    }
  }

  loadMore (event) {
    event.preventDefault()

    this.setState({
      newPageResources: this.props.loader.getResourcesForPathname(event.target.pathname),
      pageNumber: this.state.pageNumber + 1
    })
  }

  loadMoreURL () {
    return `${this.state.url}/${this.state.pageNumber + 1}`
  }

  showLoadMoreButton () {
    return this.state.pageNumber < this.state.numberOfPages
  }

  render () {
    return (
      <main>
        {
          React.createElement(this.state.newPageResources.component, this.state.newPageResources.json)
        }
        <Link to={this.loadMoreURL()}
          style={{ display: this.showLoadMoreButton() ? 'block' : 'none' }}
          onClick={this.loadMore}>
          Carregar mais eventos
        </Link>
      </main>
    )
  }
}

const buildPath = ({sport, country}) => {
  return `/${sport || ''}${country ? `/${country}` : ''}`
}
