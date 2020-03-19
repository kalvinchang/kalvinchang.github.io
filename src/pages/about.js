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
                        <h1>intro</h1>
                        <div>
                          <p>insert vain attempt to make myself not seem boring blah blah</p>
                        </div>
                    </>
                }
                right={
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
                          <h1>movies/shows</h1>
                          <ul>
                            <li>TODO: insert list</li>
                          </ul>
                        </div>
                        <div>
                          <h1>music</h1>
                          <ul>
                            <li>五月天 Mayday (since 2018)</li>
                            <li>BTS (since 2016)</li>
                            <li>草東沒派對 No Party for Cao Dong (since 2020)</li>
                            <li>Ellie Goulding (since 2014)</li>
                          </ul>
                        </div>
                  </>
                }
                />
    </>)
}

export default AboutPage