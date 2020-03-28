import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// TODO: make global or don't hardcode
const pages = ['/', '/about', '/timeline', '/resume', '/contact']

const Nav = (props) => {
  // https://nickymeuleman.netlify.com/blog/gatsby-pagination
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 0
  const isLast = currentPage === numPages - 1
  const prevPage = currentPage - 1 === 0 ? "/" : (currentPage - 1).toString()
  const nextPage = currentPage + 1 < numPages ? pages[currentPage + 1] : null;

  return (
    <>
    {!isFirst && (
      <Link to={prevPage} rel="prev" className="left-arrow">
        <Img fluid={props.leftArrow} className="nav-arrow" />
      </Link>
    )}
    {!isLast && (
      <Link to={nextPage} rel="next" className="right-arrow">
        <Img fluid={props.rightArrow} className="nav-arrow" />
      </Link>
    )}
    </>
  )
}

export default Nav