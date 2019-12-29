import React from 'react'
import { Link } from 'gatsby'

import styles from './navigation.module.styl'

// this is only active when the location pathname is exactly
// the same as the href.
const isActive = ({ location, href }) => {
  const decodedURI = decodeURI(location.pathname)
  const isCurrent = decodedURI === href
  return {
    className: `${styles.navLink} ${isCurrent ? styles.active : ''}`
  }
}
const ExactNavLink = props => <Link getProps={isActive} {...props} />

// this link will be active when itself or deeper routes
// are current
const isPartiallyActive = ({ location, href }) => {
  const decodedURI = decodeURI(location.pathname)
  const isPartiallyCurrent = decodedURI.startsWith(href)
  return {
    className: `${styles.navLink} ${isPartiallyCurrent ? styles.active : ''}`
  }
}
const PartialNavLink = props => <Link getProps={isPartiallyActive} {...props} />

export default ({ sports }) => (
  <nav>
    <ol className={`${styles.sportsList}`}>
      {sports.map(({ node }, idx) => (
        <li key={idx} className={`${styles.sportItem}`}>
          <h3 className={styles.noMargin}>
            <PartialNavLink to={`/${node.name}`}>{node.name}</PartialNavLink>
          </h3>
          <ol className={`${styles.countriesList}`}>
            {node.countries.map((country, idx) => (
              <li key={idx} className={`${styles.countryItem}`}>
                <h3 className={styles.noMargin}>
                  <ExactNavLink to={`/${node.name}/${country.name}`}>
                    {country.name}
                  </ExactNavLink>
                </h3>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  </nav>
)
