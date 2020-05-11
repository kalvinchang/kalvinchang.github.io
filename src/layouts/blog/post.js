import React from "react"
import Notebook from "../../components/notebook"
import { graphql } from "gatsby"
import Header from "../../components/header"
import Nav from "../../components/nav"
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = (props) => {
  const { data } = props
  const { frontmatter, body } = data.mdx

    return (
    <div id="blog-post">
      <Header image={data.ruler.childImageSharp.fluid} />
      <Nav pageContext={props.pageContext}
            leftArrow={data.leftArrow.childImageSharp.fluid}
            rightArrow={data.rightArrow.childImageSharp.fluid} />
      <Notebook left={
        <>
          <header>
            <h1>{frontmatter.title}</h1>
            <span className="date">{frontmatter.date}</span>
          </header>
          <MDXRenderer>{body}</MDXRenderer>
        </>
      } right={
        <>
        </>
      }/>
    </div>)
}

export const query = graphql`
query PostsBySlug($slug: String!) {
  mdx(fields: { slug: { eq: $slug } }) {
    body
    frontmatter {
      title
      date(formatString: "MMM Do YYYY")
    }
  }

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
`

export default BlogPost