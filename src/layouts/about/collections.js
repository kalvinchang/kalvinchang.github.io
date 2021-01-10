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
              <ul id="intro">
                <li>// taiwanese american, 626 native</li>
                <li>// carnegie mellon '22, computer science</li>
                <li>// he / him / his</li>
                <li>// pretending like i know what i'm doing</li>
                <li>// 我不知道我在幹嘛</li>
              </ul>
            </div>
            <div>
            <h1>interests</h1>
              <ul>
                <li>food</li>
                <li>travel</li>
                <li>language technologies</li>
                <li>learning languages</li>
                <li>+100 others with which i'm inconsistent xD</li>
              </ul>
            </div>
          </>
        }
        right={
          <>
          </>
        } />
    </div>)
}

export default AboutPage