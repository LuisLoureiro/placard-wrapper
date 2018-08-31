import React from 'react'

import EventBets from '../templates/event-bets'
import EventHeading from '../templates/event-heading'

import styles from './index.module.styl'

export default class Index extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      pagedEvents: '',
      pageNumber: 1
    }
    this.data = props.data.allMongodbPlacardDevEvents.edges
    this.numberOfPages = props.pathContext.numberOfPages
    this.url = buildPath(props.pathContext)
    this.loadMore = this.loadMore.bind(this)
    this.showLoadMoreButton = this.showLoadMoreButton.bind(this)
  }

  loadMore () {
    const self = this

    if (this.state.pageNumber < this.numberOfPages) {
      return window.fetch(`${this.url}/${this.state.pageNumber + 1}`)
        .then(response => response.text())
        .then(getEventsFromText)
        .then(moreEvents => self.setState({
          pagedEvents: self.state.pagedEvents.concat(moreEvents),
          pageNumber: self.state.pageNumber + 1
        }))
    }
  }

  showLoadMoreButton () {
    return this.state.pageNumber < this.numberOfPages
  }

  render () {
    return (
      <main>
        <ol className={styles['events-list']}>
          {
            this.data.map(({ node }, idx) => (
              <li key={idx} className={styles['event-item']}>
                <EventHeading event={node} />
                <EventBets betTypes={node.betTypes} />
              </li>
            ))
          }
        </ol>
        <ol className={styles['events-list']} dangerouslySetInnerHTML={{ __html: this.state.pagedEvents }} />
        <button type='button'
          style={{ display: this.showLoadMoreButton() ? 'block' : 'none' }}
          onClick={this.loadMore}>
          Carregar mais eventos
        </button>
      </main>
    )
  }
}

export const query = graphql`
  query EventsListQuery($sport: String, $country: String, $skip: Int = 0, $limit: Int = 20) {
    allMongodbPlacardDevEvents(
      filter: { sport: { eq: $sport }, country: { eq: $country } },
      sort: { fields: [date], order: ASC },
      skip: $skip,
      limit: $limit
    ) {
      edges {
        node {
          code
          home
          away
          date
          sport
          country
          competition
          betTypes {
            name
            options {
              name
              value
            }
          }
        }
      }
    }
  }
`

const buildPath = ({sport, country}) => {
  return `/${sport || ''}${country ? `/${country}` : ''}`
}

const getEventsFromText = text => {
  const bodySlice = text.slice(text.indexOf('<body'), text.lastIndexOf('</body>'))

  return bodySlice.slice(bodySlice.indexOf('><li') + 1, bodySlice.lastIndexOf('</li>') + 5)
}
