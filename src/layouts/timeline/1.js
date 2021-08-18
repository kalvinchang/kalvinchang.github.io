import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Notebook from "../../components/notebook"
import Header from "../../components/header"
import Nav from "../../components/nav"

const ResumePage = (props) => {
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
  <>
  <Header image={data.ruler.childImageSharp.fluid} />
  <Nav pageContext={props.pageContext}
            leftArrow={data.leftArrow.childImageSharp.fluid}
            rightArrow={data.rightArrow.childImageSharp.fluid} />
  <Notebook 
    left={
      <>
        <h1>Carnegie Mellon</h1>
        <h3>senior fall, 2021 (current)</h3>
        <ul className="comments">
          <li>// 15-440 Distributed Systems</li>
          <li>// 11-711 Advanced Natural Language Processing</li>
          <li>// 15-317 Constructive Logic</li>
          <li>// 80-287 Language Variation and Change</li>
        </ul>
        <ul>
          <li>first semester back on campus</li>
        </ul>
      </>
    }
    right={
      <>
        <h3>amazon, summer 2021</h3>
        <ul>
          <li>team was responsible for EC2 Instance health checks</li>
          <li>learned what it was like to work for a large company</li>
          <li>continued diving deep into back end web dev</li>
        </ul>
      </>
    }
  />
  </>
  )
}

export default ResumePage