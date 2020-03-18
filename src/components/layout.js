/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
      name: file(relativePath: {eq: "images/name.png"}) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
  render={data => {
    return (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Notebook 
        hideLeft={true}
        right={
          <>
            <div id="belongs-to">
              <p>This notebook belongs to:</p>
              <br />
              <Img fluid={data.name.childImageSharp.fluid}/>

              <br />
              <br />
              <p>If found, please return to:</p>
              <br />
              <p>626 Main St, Los Angeles, CA 91745</p>
              <br />
              <p>台北市幸福路123巷0號8樓</p>
            </div>

            <div id='mini-bio'>
              <p>los angeles • taipei</p>
              <p>cs • carnegie mellon '22 • glen a wilson '18</p>
              <p>he/him/his • 20</p>
              <br />
              <p>pretending like i know what i'm doing
              </p>
              <br />
              <p>我不知道我在幹嘛 好好喬裝一下吧</p>
            </div>
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
