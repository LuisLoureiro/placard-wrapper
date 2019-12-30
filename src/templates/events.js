import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import EventsComponent from '../components/events'

export default ({ data }) => (
  <Layout>
    <EventsComponent events={data.allMongodbHerokuRvm7Q988Events.edges} />
  </Layout>
)

export const query = graphql`
  query($filter: mongodbHeroku_rvm7q988EventsFilterInput, $skip: Int = 0, $limit: Int = 10) {
    allMongodbHerokuRvm7Q988Events(
      filter: $filter
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
