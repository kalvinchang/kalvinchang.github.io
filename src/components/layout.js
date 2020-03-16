/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "normalize.css"
import "./layout.css"

import Header from "./header"
import Notebook from "./notebook"

const Layout = ({ children }) => (
  <StaticQuery query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}
  render={data => {
    return (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Notebook />
      </>
    )
  }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
