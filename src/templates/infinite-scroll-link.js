import React from 'react'
import Link from 'gatsby-link'

export default class InfiniteScrollLink extends React.Component {
  constructor (props) {
    super(props)

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    }

    this.observerCallback = this.observerCallback.bind(this)

    this.state = {
      observer: new window.IntersectionObserver(this.observerCallback(props.callback || (() => {})), observerOptions)
    }
  }

  componentDidMount () {
    this.state.observer.observe(document.querySelector('#infinite-scroll-link'))
  }

  componentWillUnmount () {
    if (this.state.observer.unobserve instanceof Function) {
      this.state.observer.unobserve(document.querySelector('#infinite-scroll-link'))
    }
  }

  observerCallback (callback) {
    return () => {
      return callback(this.props.url)
    }
  }

  render () {
    return (
      <Link id='infinite-scroll-link'
        to={this.props.url}>
        { this.props.linkName }
      </Link>
    )
  }
}
