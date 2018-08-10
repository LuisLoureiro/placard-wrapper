import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './navigation.module.styl'

export default ({ sports }) => (
  <nav>
    <ol className={styles['sports-list']}>
      {
        sports.map(({ node }, idx) => (
          <li key={idx} className={`${styles['sport-item']}`}>
            <h3>
              <NavLink
                to={`/${node.name}`}
                activeClassName='active'>
                { node.name }
              </NavLink>
            </h3>
            <ol className={`${styles['countries-list']}`}>
              {
                node.countries.map((country, idx) => (
                  <li key={idx} className={`${styles['country-item']}`}>
                    <h3>
                      <NavLink
                        to={`/${node.name}/${country.name}`}
                        activeClassName='active'
                        className={styles.nowrap}>
                        { country.name }
                      </NavLink>
                    </h3>
                  </li>
                ))
              }
            </ol>
          </li>
        ))
      }
    </ol>
  </nav>
)
