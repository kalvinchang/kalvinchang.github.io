import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

// get rid of spamming ruler issue by increasing img size

const Header = ({ image }) => (
  <div className="ruler">
    <Img fluid={image} />
    <nav>
      <Link to="/">front cover</Link>
      <Link to="/about">about</Link>
      <Link to="/resume">resume</Link>
      <Link to="/contact">contact</Link>
      <Link to="/blog">brain dump</Link>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
