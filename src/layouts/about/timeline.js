import React from "react"
import Notebook from "../../components/notebook"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../../components/header"
import Nav from "../../components/nav"

const Timeline = (props) => {
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
                <h1 className="year">high school</h1>
                <h3><br /><br />overall</h3>
                <ul>
                  <li>life revolved around college apps TT</li>
                  <li>spent most of my time not with friends but on extracurriculars</li>
                  <li>tried so hard to become an extrovert freshman year</li>
                  <li>burned out sophomore year due to overcommitment</li>
                  <li>slept 6 hours avg junior year</li>
                  <li>wanted to leave Wilson 1 year early but was persuaded by Ms. Mabrie not to</li>
                  <li>had some good times with friends senior year</li>
                </ul>
              </>
            }
            right={
              <>
                <h1 className="year">college</h1>
                <h3><br /><br />fall 2018</h3>
                <ul>
                  <li>A FRICKING MESS</li>
                  <li>inefficient studying</li>
                  <li>excessive worrying over grades</li>
                </ul>

                <h3>spring 2019</h3>
                <ul>
                  <li>ARCC Spring Theatre - 孫悟空 in Journey to the West</li>
                </ul>

                <h3>summer 2019</h3>
                <ul>
                  <li>had a taste of financial independence</li>
                </ul>

                <h3>fall 2019</h3>
                <ul>
                  <li>signed up for too many classes</li>
                  <li>lost an important family member</li>
                </ul>

                <h3>spring 2020</h3>
                <ul>
                  <li>took spring semester off to intern</li>
                </ul>
              </>
            }
        />
      </>)
}

export default Timeline