import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'
import styles from "./layouts.module.css";

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <div
          className={styles.topimage}
        >
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'white',
            }}
            to={'/'}
          >
            XXX Test Blog
          </Link>
        </h1>
      </div>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            XXX Test Blog
          </Link>
        </h3>
      )
    }
    return (
      <div>
        {header}
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            //padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
        {children()}
        </div>
      </div>
    )
  }
}

export default Template
