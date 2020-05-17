import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// TODO: make global or don't hardcode
const pages = ['/', '/about', '/about/timeline', '/resume', '/resume/2', '/resume/3', '/contact', '/blog']

const Nav = (props) => {
  // https://nickymeuleman.netlify.com/blog/gatsby-pagination
  const { currentPage, numPages, blog } = props.pageContext
  let isFirst = currentPage === 0
  let isLast = currentPage === numPages - 1
  let prevPage = currentPage - 1 === 0 ? "/" : pages[currentPage - 1]
  let nextPage = currentPage + 1 < numPages ? pages[currentPage + 1] : null;
  
  if (blog) {
    const { previous, next } = props.pageContext
    
    isFirst = !previous;
    isLast = !next;
    prevPage = isFirst ? null : previous.fields.slug;
    nextPage = isLast ? null : next.fields.slug;
  }

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