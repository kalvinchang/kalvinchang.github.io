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
        <Notebook 
        right={
          <>
            <p>This notebook belongs to:</p>
            <h1>kalvin chang</h1>

            <p>If lost, please return to</p>
            <p>626 Main St, Los Angeles, CA 91745</p>
            <p>or</p>
            <p>台北市這個區不存在路六段9號</p>

            <p>los angeles / 626 • taipei</p>
            <p>cs • carnegie mellon '22 • glen a wilson '18</p>
            <p>he/him/his • 20</p>
          </>
        }/>
      </>
    )
  }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
