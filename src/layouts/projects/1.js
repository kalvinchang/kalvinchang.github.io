import React from "react"
import Notebook from "../../components/notebook"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../../components/header"
import Nav from "../../components/nav"

const AboutPage = (props) => {
  const data = useStaticQuery(graphql`
    query {
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
    <div id="projects">
      <Header image={data.ruler.childImageSharp.fluid} />
      <Nav pageContext={props.pageContext}
            leftArrow={data.leftArrow.childImageSharp.fluid}
            rightArrow={data.rightArrow.childImageSharp.fluid} />
      <Notebook
        left={
          <>
            <h1>Projects</h1>
            <h3>morphotactics</h3>
            <ul>
              <li>Implemented Python interface for linguists to express a language’s morphology with finite state transducers
              </li>
              <li>Compiled dependencies among inputted morpheme classes with a depth-first graph search algorithm
              </li>
              <li>Used Pynini, Pywrapfst, and OpenFST libraries
              </li>
              <li>Advised by Professor David Mortensen, LLab @ CMU
              </li>
              <li><a href="https://github.com/dmort27/morphotactics">Github</a></li>
            </ul>
          </>
        }
        right={
          <>
            <h3>Aftermath</h3>
            <ul>
              <li>Placed first in the Congressional App Challenge (CA-39, 138 teams)</li>
              <li>Peer tutoring platform to help students with math anxiety study together
              </li>
              <li>Developed text/voice chat and collaborative sketchboard that rendered marks and LaTeX across devices in real time
              </li>
              <li>Full stack JavaScript Web app with Firebase, Node.js/Socket.io and Youtube, MathQuill, and Desmos APIs
              </li>
              <li>Conducted user research on 250+ students to understand the needs of students with math anxiety
              </li>
              <li><a href="https://github.com/kalvinchang/aftermath">Github</a></li>
            </ul>
          </>
        }
      />
    </div>)
}

export default AboutPage