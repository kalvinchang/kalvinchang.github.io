import React from "react"
import Notebook from "../components/notebook"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
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
                        <div>
                          <h1>interests</h1>
                          <ul>
                            <li>food</li>
                            <li>travel</li>
                            <li>Mandarin</li>
                          </ul>
                        </div>
                        <div>
                          <h1>movies / dramas</h1>
                          <ul>
                            <li>Night Flight - my first BL movie!</li>
                            <li>HIStory 2 越界</li>
                            <li>HIStory 3 圈套</li>
                            <li>Long Time No See</li>
                            <li>Goblin</li>
                            <li>牽牛花開的日子</li>
                            <li>阿爸的願望</li>
                            <li>花甲大人轉少年</li>
                            <li>兩個爸爸</li>
                            <li>Some Day or One Day 想見你</li>
                            <li>真愛找麻煩</li>
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
                            <li>BTS (since 2016)</li>
                            <li>草東沒派對 No Party for Cao Dong (since 2020)</li>
                            <li>Ellie Goulding (since 2014)</li>
                          </ul>
                        </div>
                    <div>
                      <h1>bucketlist</h1>
                      <ul>
                        <li>insert stupid items</li>
                      </ul>
                    </div>
                    <div>
                      <h1>travels</h1>
                      <ul>
                        <li>insert places I've been to</li>
                      </ul>
                    </div>
                  </>
                }
                />
    </>)
}

export default AboutPage