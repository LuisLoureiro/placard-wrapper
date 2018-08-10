import React from 'react'

export default ({ event }) => (
  <h4>
    {
      `${event.code}
      - ${new Date(event.date * 1000).toLocaleString()}
      - ${event.home} X ${event.away}
      - ${event.sport}
      - ${event.country}
      - ${event.competition}`
    }
  </h4>
)
