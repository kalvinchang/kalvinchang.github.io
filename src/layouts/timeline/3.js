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
        <h3>sophomore fall, 2019</h3>
        <ul className="comments">
          <li>// Teaching Assis., 15-150 Princ. Functional Programming</li>
          <li>// 11-411 Natural Language Processing</li>
          <li>// 15-213 Intro to Computer Systems</li>
          <li>// 05-391 Designing Human Centered Software</li>
          <li>// 36-218 Probability Theory for Computer Scientists</li>
          <li>// 33-104 Experimental Physics</li>
        </ul>

        <br />
        <h3>hopscotch health, summer 2019</h3>
        <ul>
          <li>first software internship in industry</li>
          <li>startup in pittsburgh tackling tobacco cessation &amp; diet management in India</li>
          <li>first taste of financial independence</li>
        </ul>
      </>
    }
    right={
      <>
        <h3>freshman spring, 2019</h3>
        <ul className="comments">
          <li>// 15-150 Principles of Functional Programming</li>
          <li>// 15-251 Great Ideas in Theoretical Computer Science</li>
          <li>// 05-392 Interaction Design Overview</li>
          <li>// 79-104 Global Histories</li>
          <li>// 76-101 Interpretation and Argument</li>
        </ul>
        <ul>
          <li>first A in a CS class</li>
          <li>played 孫悟空 in Journey to the West by ARCC</li>
        </ul>

        <br />
        <h3>freshman fall, 2018</h3>
        <ul className="comments">
          <li>// 15-122 Imperative Computation (Data Structures)</li>
          <li>// 15-151 Math. Foundations of CS (Intro Discrete Math)</li>
          <li>// 21-241 Matrices &amp; Linear Transformations (Lin. Algebra)</li>
          <li>// 08-180 Nature of Language (Intro Linguistics)</li>
          <li>// 07-131 Great and Practical Ideas in Computer Science</li>
        </ul>
        
        <ul>
          <li>difficult academic transition</li>
          <li>should have taken fewer math/CS classes</li>
          <li>did manage to sleep well though</li>
        </ul>
      </>
    }
  />
  </>
  )
}

export default ResumePage2