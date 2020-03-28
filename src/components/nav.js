import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Nav = (props) => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 0
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 0 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  
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