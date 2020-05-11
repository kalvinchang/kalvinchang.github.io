import React from "react"
import Notebook from "../../components/notebook"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../../components/header"
import Nav from "../../components/nav"

const BlogEntriesPage = (props) => {
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

      posts: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  `)
    return (
    <div id="blog-list">
      <Header image={data.ruler.childImageSharp.fluid} />
      <Nav pageContext={props.pageContext}
            leftArrow={data.leftArrow.childImageSharp.fluid}
            rightArrow={data.rightArrow.childImageSharp.fluid} />
      <Notebook left={
        <div>
          <h1 className="page-title">Index</h1>
          <ul className="dot-leaders">
          {data.posts.nodes.map(({ excerpt, id, frontmatter, fields }, index) => (
            // add page numbering that reflects length of post
            <li>
              <a href={fields.slug} className="blog-title">{frontmatter.title}</a>
              <p className="page">{index + 1}</p>
            </li>
          ))}
          </ul>
        </div>
      }/>
    </div>)
}

export default BlogEntriesPage