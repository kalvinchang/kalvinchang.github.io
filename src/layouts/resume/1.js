import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Notebook from "../../components/notebook"
import Header from "../../components/header"
import Nav from "../../components/nav"

const ResumePage = (props) => {
  const data = useStaticQuery(graphql`
  query {
    resumePdf: file(relativePath: {eq: "resume.pdf"}) {
      name
      extension
      publicURL
    }
    resumePng: file(relativePath: {eq: "resume.png"}) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    download: file(relativePath: {eq: "images/icons/download.png"}) {
      childImageSharp {
        fluid(maxWidth: 72, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    collage: file(relativePath: {eq: "images/piccollage.png"}) {
      childImageSharp {
        fluid(maxWidth: 180, maxHeight: 180) {
          ...GatsbyImageSharpFluid
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
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h1>Resume</h1>
          <div className="download-link">
            <a href={data.resumePdf.publicURL} download>
              <Img fluid={data.download.childImageSharp.fluid} className="download" alt="Download my resume"></Img>
            </a>
          </div>
        </div>
        <div id="resume">
          <a href={data.resumePdf.publicURL}>
            <Img fluid={data.resumePng.childImageSharp.fluid}alt="My resume"></Img>
          </a>
        </div>
      </>
    }
    right={
      <>
        <h1 className="year">2020-2021</h1>
        <h3>junior fall</h3>
        <ul>
          <li>Teaching Assis., 15-150 Princ. Functional Programming</li>
          <li>11-492 Speech Processing</li>
          <li>15-210 Parallel and Sequential Data Structures and Algorithms</li>
          <li>05-333 Gadgets, Sensors, and Activity Recognition in HCI</li>
          <li>17-200 Ethics and Policy Issues in Computing</li>
          <li>82-283 Language Diversity and Cultural Identity</li>
        </ul>
      </>
    }
  />
  </>
  )
}

export default ResumePage