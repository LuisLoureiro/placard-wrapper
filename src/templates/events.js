import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import EventsComponent from '../components/events'

export default ({ data }) => (
  <Layout>
    <EventsComponent events={data.allMongodbPlacardDevEvents.edges} />
  </Layout>
)

export const query = graphql`
  query($sport: String, $country: String, $skip: Int = 0, $limit: Int = 10) {
    allMongodbPlacardDevEvents(
      filter: { sport: { eq: $sport }, country: { eq: $country } }
      sort: { fields: [date], order: ASC }
      skip: $skip
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
