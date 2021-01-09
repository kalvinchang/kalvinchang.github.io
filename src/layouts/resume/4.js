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
        <h1 className="year">high school</h1>
        <h3><br /><br />glen a. wilson code</h3>
        <ul>
          <li>founder, president</li>
          <li>first experience with leadership</li>
        </ul>

        <h3>aftermath</h3>
        <ul>
          <li>project lead + full stack</li>
          <li>first web app</li>
          <li>first place, district ca-39, congressional app challenge</li>
        </ul>
      </>
    }
    right={
      <>
        <h3>ftc robotics</h3>
        <ul>
          <li>self-studied Java from Intro to Java by Daniel Liang</li>
        </ul>
      </>
    }
  />
  </>
  )
}

export default ResumePage3