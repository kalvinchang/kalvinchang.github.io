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

    return <Notebook
                left={
                    <>
                        <h1>Contact me</h1>
                        <div>
                        {
                          data.allFile.edges.map(edge => 
                            <div>
                              <Img fluid={edge.node.childImageSharp.fluid} className="logo" />
                              <p>{edge.node.name}</p>
                            </div>
                          )
                        }
                        </div>
                    </>
                }
                />
}

export default ContactPage