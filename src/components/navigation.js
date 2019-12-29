import React from 'react'
import { NavLink } from 'gatsby'

import styles from './navigation.module.styl'

export default ({ sports }) => (
  <nav>
    <ol className={`${styles.sportsList}`}>
      {sports.map(({ node }, idx) => (
        <li key={idx} className={`${styles.sportItem}`}>
          <h3 className={styles.noMargin}>
            <NavLink
              to={`/${node.name}`}
              activeClassName={styles.active}
              className={styles.navLink}
            >
              {node.name}
            </NavLink>
          </h3>
          <ol className={`${styles.countriesList}`}>
            {node.countries.map((country, idx) => (
              <li key={idx} className={`${styles.countryItem}`}>
                <h3 className={styles.noMargin}>
                  <NavLink
                    to={`/${node.name}/${country.name}`}
                    activeClassName={styles.active}
                    className={styles.navLink}
                  >
                    {country.name}
                  </NavLink>
                </h3>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  </nav>
)
