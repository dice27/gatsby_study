import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'
import styles from "./layouts.module.css";

require("prismjs/themes/prism-okaidia.css");

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
              marginLeft: rhythm(1),
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
        <div
          style={{
            backgroundColor: '#312114',
            color: '#FBE9D6',
            height: rhythm(2.8),
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: 'Montserrat, sans-serif',
              marginTop: 0,
              marginBottom: rhythm(-1),
              lineHeight: rhythm(2.8),
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
          </h2>
        </div>
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
          }}
        >
        {children()}
        </div>
      </div>
    )
  }
}

export default Template
