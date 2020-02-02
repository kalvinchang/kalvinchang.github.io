import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header data-testid="header">
      <h1>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: `black`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul className="header__pages">
        <li>about</li>
        <li>blog</li>
        <li>resume</li>
        <li>contact</li>
      </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
