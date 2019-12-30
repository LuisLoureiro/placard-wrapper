import React from 'react'
import { Link } from 'gatsby'

import styles from './infinite-scrolling-link.module.styl'

export default class InfiniteScrollLink extends React.Component {
  constructor (props) {
    super(props)

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    }
    const callback = props.callback || (() => {})

    this.observerCallback = this.observerCallback.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this, callback)
    this.getURL = this.getURL.bind(this)
    this.observer = new window.IntersectionObserver(
      this.observerCallback(callback),
      observerOptions
    )
    this.callbackCalls = 0
    this.MAX_CALLBACK_CALLS = 3
  }

  componentDidMount () {
    this.observer.observe(document.querySelector('#infinite-scroll-link'))
  }

  componentWillUnmount () {
    if (this.observer.unobserve instanceof Function) {
      this.observer.unobserve(document.querySelector('#infinite-scroll-link'))
    }
  }

  componentDidUpdate (newProps) {
    if (this.props.path !== newProps.path) {
      this.callbackCalls = 0
    }
  }

  observerCallback (callback) {
    return entries => {
      if (this.callbackCalls < this.MAX_CALLBACK_CALLS) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            callback(this.getURL())

            this.callbackCalls += 1
          }
        })
      }
    }
  }

  handleOnClick (callback, event) {
    event.preventDefault()

    callback(this.getURL())

    this.callbackCalls = 1
  }

  getURL () {
    return `${this.props.path}/${this.props.pageNumber + 1}`
  }

  render () {
    return (
      <Link
        id='infinite-scroll-link'
        className={styles.loadMoreLink}
        to={this.getURL()}
        onClick={this.handleOnClick}
      >
        {this.props.linkName}
      </Link>
    )
  }
}
