import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Notebook = () => {
    const data = useStaticQuery(graphql`
      query {
        Image: file(relativePath: { eq: "notebook.png" }) {
          childImageSharp {
            fixed(width: 1000) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)
    return <Img fixed={data.Image.childImageSharp.fixed} alt='notebook'/>
  }

export default Notebook
