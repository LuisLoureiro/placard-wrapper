import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Sports from '../sports'
import Countries from '../countries'
import PlacardLink from '../placard-link/index'

export default class Header extends Component {
  constructor (props) {
    super(props)

    this.navButtonClick = this.navButtonClick.bind(this)
  }

  navButtonClick (event) {
    const direction = Number.parseInt(event.target.dataset.direction)
    let sportElement = event.target.nextElementSibling

    if (sportElement.tagName === 'BUTTON') {
      sportElement = sportElement.nextElementSibling
    }

    return scrollSports(direction, sportElement)
  }

  render () {
    return <header>
      <nav>
        <NavLink exact to='/' className='to-right'>Home</NavLink>
        <PlacardLink className='placard-link to-right' />
        <button className='to-left' data-direction='-1' onClick={this.navButtonClick}>&#171;</button>
        <button className='to-right' data-direction='1' onClick={this.navButtonClick}>&#187;</button>
        {
          !this.props.loadingSports && this.props.sports &&
          <Sports className='no-overflow-x' sports={this.props.sports} hideChildren>
            <Countries />
          </Sports>
        }
      </nav>
    </header>
  }
}

function scrollSports (direction, scrollElement) {
  const MULTIPLIER = 50

  if (!scrollElement || !('scrollLeft' in scrollElement) || (direction !== -1 && direction !== 1)) {
    return false
  }

  scrollElement.scrollLeft += (MULTIPLIER * direction)
}
