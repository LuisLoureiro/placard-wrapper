import React from 'react'

export default ({ event }) => (
  <h3>
    {
      `${event.code}
      - ${new Date(event.date * 1000).toLocaleString()}
      - ${event.home} X ${event.away}
      - ${event.sport}
      - ${event.country}
      - ${event.competition}`
    }
  </h3>
)
