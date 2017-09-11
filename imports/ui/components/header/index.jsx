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
    const direction = Number.parseInt(event.currentTarget.dataset.direction)
    let sportElement = event.currentTarget.nextElementSibling

    if (sportElement.tagName === 'BUTTON') {
      sportElement = sportElement.nextElementSibling
    }

    return this.props.navButtonClick(direction, sportElement)
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
