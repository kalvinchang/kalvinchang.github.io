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
                          <h1>interests</h1>
                          <ul>
                            <li>food</li>
                            <li>travel</li>
                            <li>Mandarin</li>
                            <li>+100 others with which i'm inconsistent xD</li>
                          </ul>
                        </div>
                        <div>
                          <h1>movies / dramas</h1>
                          <ul>
                            <li>Night Flight - my first BL movie!</li>
                            <li>HIStory 2 越界</li>
                            <li>HIStory 3 圈套</li>
                            <li>Goblin</li>
                            <li>牽牛花開的日子</li>
                            <li>阿爸的願望</li>
                            <li>花甲大人轉少年</li>
                            <li>兩個爸爸</li>
                            <li>Some Day or One Day 想見你</li>
                          </ul>
                        </div>
                    </>
                }
                right={
                  <>
                    <div>
                          <h1>music</h1>
                          <ul>
                            <li>五月天 Mayday (since 2018)</li>
                            <li>BTS (since 2017)</li>
                            <li>周杰倫 Jay Chou (since 2007?)</li>
                            <li>Ellie Goulding (since 2014)</li>
                            <li>OSTs from dramas</li>
                          </ul>
                        </div>
                    <div>
                      <h1>bucketlist</h1>
                      <ul>
                        <li>&lt;insert boring shit boring people want to do&gt;</li>
                      </ul>
                    </div>
                    <div>
                      <h1>travels</h1>
                      <ul>
                        <li>&lt;pretend like my world isn't small&gt;</li>
                      </ul>
                    </div>
                  </>
                }
                />
    </div>)
}

export default AboutPage