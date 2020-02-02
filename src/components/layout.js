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
import BackgroundImage from 'gatsby-background-image'

import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      desktop: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `}
  render={data => {
    const imageData = data.desktop.childImageSharp.fluid
    return (
      <>
        <BackgroundImage fluid={imageData} style={{
          height: '100vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        </BackgroundImage>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
        </div>
      </>
    )
  }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
