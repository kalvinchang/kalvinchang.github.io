import React from "react"
import Notebook from "../components/notebook"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"

const NotFoundPage = ({ pageContext }) => {
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
          <h1>how did you get here???</h1>
        }
        right={
          <h1>shhh this page is secret</h1>
        }
      />
    </>
  )
}

export default NotFoundPage
