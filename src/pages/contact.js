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
                        childImageSharp {
                          fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
        `)

    return <Notebook id="contact-me"
                left={
                    <>
                        <h1>Contact me</h1>
                        <div>
                        {
                          data.allFile.edges.map(edge => <Img fluid={edge.node.childImageSharp.fluid} className="logo" />)
                        }
                        </div>
                    </>
                }
                right={
                    <a>Spotify</a>
                }
                />
}

export default ContactPage