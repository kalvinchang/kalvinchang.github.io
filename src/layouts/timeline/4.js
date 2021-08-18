import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Notebook from "../../components/notebook"
import Header from "../../components/header"
import Nav from "../../components/nav"


const ResumePage3 = (props) => {
  const data = useStaticQuery(graphql`
  query {
    resumePdf: file(relativePath: {eq: "resume.pdf"}) {
      name
      extension
      publicURL
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
`)

  return (
  <>
  <Header image={data.ruler.childImageSharp.fluid} />
  <Nav pageContext={props.pageContext}
            leftArrow={data.leftArrow.childImageSharp.fluid}
            rightArrow={data.rightArrow.childImageSharp.fluid} />
  <Notebook 
    left={
      <>
        <h1>high school</h1>
        <h3>CODE</h3>
        <ul>
          <li>founder, president</li>
          <li>filled the CS extracurricular void at my high school</li>
          <li>mentored &amp; taught web dev + Java to 10+ budding coders</li>
          <li>launched web dev + Java summer camp</li>
          <li>first experience with leadership and did not know what I was doing at first</li>
          <li>entered congressional app challenge, ACSL</li>
        </ul>
      </>
    }
    right={
      <>
        <h3>ftc robotics</h3>
        <ul>
          <li>self-studied Java from Intro to Java by Daniel Liang</li>
          <li>taught 5 prospective programmers Java</li>
          <li>realized I was not interested in mechanical engineering</li>
        </ul>
      </>
    }
  />
  </>
  )
}

export default ResumePage3