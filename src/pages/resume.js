import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Notebook from "../components/notebook"
import Header from "./../components/header"
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
    ruler: file(relativePath: {eq: "images/ruler.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 108) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
  <>
  <Header image={data.ruler.childImageSharp.fluid} />
  <Notebook 
    left={
      <>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <h1>Resume</h1>
          <a href={data.resumePdf.publicURL}>Link</a>
        </div>
        <Img fluid={data.resumePng.childImageSharp.fluid} id="resume" alt="My resume"></Img>
      </>
    }
    right={
      <>
        <h1>glen a. wilson code</h1>
        <ul>
          <li>founder, president</li>
          <li>first experience with leadership</li>
        </ul>

        <h1>aftermath</h1>
        <ul>
          <li>project lead + full stack</li>
          <li>first web app</li>
        </ul>

        <h1>fall 2018</h1>
        <ul>
          <li>15-122 Principles of Imperative Computation (Data Structures)</li>
          <li>15-151 Mathematical Foundations of Computer Science (Intro Discrete Math)</li>
          <li>21-241 Matrices and Linear Transformations (Linear Algebra)</li>
          <li>08-180 Nature of Language (Intro Linguistics)</li>
          <li>07-131 Great and Practical Ideas in Computer Science</li>
        </ul>

        <h1>spring 2019</h1>
        <ul>
          <li>15-150 Principles of Functional Programming</li>
          <li>15-251 Great Ideas in Theoretical Computer Science</li>
          <li>05-392 Interaction Design Overview</li>
          <li>79-104 Global Histories</li>
          <li>76-101 Interpretation and Argument</li>
        </ul>

        <h1>hopscotch health</h1>
        <ul>
          <li>software engineering intern</li>
          <li>first internship</li>
        </ul>

        <h1>fall 2020</h1>
        <ul>
          <li>Teaching Assistant, 15-150 Principles of Functional Programming</li>
          <li>11-411 Natural Language Processing</li>
          <li>15-213 Intro to Computer Systems</li>
          <li>05-391 Designing Human Centered Software</li>
          <li>36-218 Probability Theory for Computer Scientists</li>
          <li>33-104 Experimental Physics</li>
        </ul>

        <h1>piccollage</h1>
        <ul>
          <li>server developer intern</li>
        </ul>
      </>
    }
  />
  </>
  )
}

export default AboutPage