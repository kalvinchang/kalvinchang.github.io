import React from "react"
import Notebook from "../components/notebook"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"

const ContactPage = () => {
    const data = useStaticQuery(graphql`
        query {
          ruler: file(relativePath: {eq: "images/ruler.png"}) {
            childImageSharp {
              fluid(maxWidth: 1000, maxHeight: 108) {
                ...GatsbyImageSharpFluid
              }
            }
          }
            allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"}, relativeDirectory:{eq:"images/logos"}}) {
                edges {
                    node {
                      name
                        childImageSharp {
                          fluid(maxWidth: 100, maxHeight: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
        `)

    const accounts = {
      github: {
        username: 'kalvinchang',
        url: 'https://github.com/kalvinchang'
      },
      gmail: {
        username: 'kalvinc@andrew.cmu.edu',
        url: 'mailto:kalvinc@andrew.cmu.edu'
      },
      youtube: {
        username: 'Kalvin Chang',
        url: 'https://www.youtube.com/channel/UCheyMEmnCZBRYWe2Iy6xGKA'
      },
      spotify: {
        username: '張郁騰',
        url: 'https://open.spotify.com/user/12145747556?si=-ayiNwSaSla5bk1sIMAMhA'
      },
      instagram: {
        username: 'kalvin_1204',
        url: 'https://instagram.com/kalvin_1204'
      },
      linkedin: {
        username: 'Kalvin Chang',
        url: 'https://linkedin.com/in/kalvinc'
      }
    }

    return (<>
      <Header image={data.ruler.childImageSharp.fluid} />
      <Notebook
                left={
                    <>
                        <h1>Contact me</h1>
                        <div>
                        {
                          data.allFile.edges.map(edge => 
                            <div className="logo-grid">
                              <Img fluid={edge.node.childImageSharp.fluid} className="logo" />
                              <a href={accounts[edge.node.name]["url"]}>{accounts[edge.node.name]["username"]}</a>
                            </div>
                          )
                        }
                        </div>
                    </>
                }
                />
    </>)
}

export default ContactPage