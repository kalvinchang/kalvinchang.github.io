import React from "react"
import Notebook from "../../components/notebook"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../../components/header"
import Nav from "../../components/nav"

const AboutPage = (props) => {
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
    <div id="about">
      <Header image={data.ruler.childImageSharp.fluid} />
      <Nav pageContext={props.pageContext}
            leftArrow={data.leftArrow.childImageSharp.fluid}
            rightArrow={data.rightArrow.childImageSharp.fluid} />
      <Notebook
        left={
          <>
            <div>
              <h1>hello world</h1>
              <ul className="comments">
                <li>// I am a fifth-year masters student at Carnegie Mellon University's 
                  Language Technologies Institute advised by <a href="https://www.cs.cmu.edu/~dmortens/">David Mortensen</a>. 
                  My work spans computational historical linguistics and Sinitic dialectology, with a focus on 
                  computerizing the reconstruction of proto-languages under the comparative method.
                  As a Machine Learning Intern at Amazon this summer, I will be exploring bias 
                  in ASR performance across different dialects.
                  I also have experience in back-end web development from my internships at Amazon Web Services 
                  and PicCollage and from my undergraduate study in computer science, also at CMU. 
                  I graduate May 2023 and am looking for full-time 
                  opportunities in either software engineering or computational linguistics research. 
                </li>

                <li>// taiwanese american, 626 native</li>
                <li>// he / him / his</li>
                <li>// trying my best not to be a 廢物 (time waster)</li>
              </ul>
            </div>
            {/* <div>
            TODO: bring back this section after re-layout
            <h1>interests</h1>
              <ul className="comments">
                <li>// back end web development</li>
                <li>// computational historical linguistics</li>
                <li>// learning languages (currently Taiwanese Hokkien)</li>
                <li>// Sinitic (Chinese) dialectology</li>
                <li>// teaching + sharing knowledge</li>
                <li>// Rilakkuma</li>
                <li>// matcha</li>
              </ul>
            </div> */}
          </>
        }
        right={
          <>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1vw'}}>
              <h1>Resume</h1>
              <div className="download-link">
                <a href={data.resumePdf.publicURL} download="kalvin_chang.pdf">
                  <Img fluid={data.download.childImageSharp.fluid} className="download" alt="Download my resume"></Img>
                </a>
              </div>
            </div>
            <div id="resume">
              <a href={data.resumePdf.publicURL} download="kalvin_chang.pdf">
                <Img fluid={data.resumePng.childImageSharp.fluid}alt="My resume"></Img>
              </a>
            </div>
          </>
        } />
    </div>)
}

export default AboutPage