import React from "react"
import Notebook from "../components/notebook"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ContactPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"},  relativeDirectory:{eq:"logos"}}) {
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
        url: 'github.com/kalvinchang'
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

    return <Notebook
                left={
                    <>
                        <h1>Contact me</h1>
                        <div>
                        {
                          data.allFile.edges.map(edge => 
                            <div>
                              <Img fluid={edge.node.childImageSharp.fluid} className="logo" />
                              <a href={accounts[edge.node.name]["url"]}>{accounts[edge.node.name]["username"]}</a>
                            </div>
                          )
                        }
                        </div>
                    </>
                }
                />
}

export default ContactPage