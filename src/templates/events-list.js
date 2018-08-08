import React from 'react'

export default ({ data }) => <div>{ JSON.stringify(data.allMongodbPlacardDevEvents.edges) }</div>

export const query = graphql`
  query EventsListQuery($sport: String!, $country: String) {
    allMongodbPlacardDevEvents(filter: { sport: { eq: $sport }, country: { eq: $country } }) {
      edges {
        node {
          code
          home
          away
          date
          sport
          country
          competition
        }
      }
    }
  }
`
