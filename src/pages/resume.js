import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Notebook from "../components/notebook"
import "./../components/layout.css"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
  query {
    resumePdf: file(relativePath: {eq: "resume.pdf"}) {
      name
      extension
      publicURL
    }
    resumePng: file(relativePath: {eq: "resume.png"}) {
      childImageSharp {
        fluid(maxWidth: 463, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return <Notebook 
    left={
      <>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <h1>Resume</h1>
          <a href={data.resumePdf.publicURL}>Link</a>
        </div>
        <Img fluid={data.resumePng.childImageSharp.fluid} id="resume" alt="My resume"></Img>
      </>
    }
  />
}

export default AboutPage