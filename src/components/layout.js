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

import Header from "./header"
import Notebook from "./notebook"
import Nav from "./nav"

const Layout = (props) => (
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
      profile: file(relativePath: {eq: "images/profile.png"}) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ruler: file(relativePath: {eq: "images/ruler.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 108) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leftArrow: file(relativePath: {eq: "images/icons/left_arrow.png"}) {
        childImageSharp {
          fluid(maxWidth: 131, maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rightArrow: file(relativePath: {eq: "images/icons/right_arrow.png"}) {
        childImageSharp {
          fluid(maxWidth: 131, maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
  render={data => {
    return (
      <>
        <Header image={data.ruler.childImageSharp.fluid} />
        <Nav pageContext={props.pageContext}
            leftArrow={data.leftArrow.childImageSharp.fluid}
            rightArrow={data.rightArrow.childImageSharp.fluid} />
        <Notebook 
        hideLeft={true}
        right={
          <>
            <div id="belongs-to">
              <p>This notebook belongs to:</p>
              <Img fluid={data.name.childImageSharp.fluid}/>
              <Img fixed={data.profile.childImageSharp.fixed}/>
              <br />
              <br />
              <p>If found, please return to:</p>
              <p>626 Main St, Los Angeles, CA 91745</p>
              <p>台北市幸福路8巷7號之一</p>
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
