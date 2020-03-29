import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Notebook from "../../components/notebook"
import Header from "../../components/header"
import Nav from "../../components/nav"


const ResumePage2 = (props) => {
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
        <h1 className="year">2018-2019</h1>
        <h3>hopscotch <br /> health</h3>
        <ul>
          <li>software engineering intern</li>
          <li>first software internship</li>
        </ul>

        <h3>freshman spring</h3>
        <ul>
          <li>15-150 Principles of Functional Programming</li>
          <li>15-251 Great Ideas in Theoretical Computer Science</li>
          <li>05-392 Interaction Design Overview</li>
          <li>79-104 Global Histories</li>
          <li>76-101 Interpretation and Argument</li>
        </ul>
      </>
    }
    right={
      <>
        <h3>freshman fall</h3>
        <ul>
          <li>15-122 Principles of Imperative Computation (Data Structures)</li>
          <li>15-151 Mathematical Foundations of Computer Science (Intro Discrete Math)</li>
          <li>21-241 Matrices and Linear Transformations (Linear Algebra)</li>
          <li>08-180 Nature of Language (Intro Linguistics)</li>
          <li>07-131 Great and Practical Ideas in Computer Science</li>
        </ul>
      </>
    }
  />
  </>
  )
}

export default ResumePage2