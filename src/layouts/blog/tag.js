import React from "react"
import Header from "../../components/header"
import Nav from "../../components/nav"

const Tag = (props) => {
  const { data, pageContext } = props
  const { tag } = pageContext

  return (
    <div id="blog-list">
      <Header image={data.ruler.childImageSharp.fluid} />
      <Nav pageContext={props.pageContext}
            leftArrow={data.leftArrow.childImageSharp.fluid}
            rightArrow={data.rightArrow.childImageSharp.fluid} />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10vh 0 0 0',
        }}>
        <div className='paper notepad'>
          <h1 className="page-title">{tag}</h1>
          <div className="notes-flexbox">
            {data.posts.nodes.map(({ excerpt, id, frontmatter, fields }, index) => (
            <div className="post-it">
              <a href={fields.slug} className="blog-title">{frontmatter.title}</a>
              <p className="blog-date">{frontmatter.date}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>)
}

export const query = graphql`
query Tags($tag: String) {
  posts: allMdx(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { tags: { in: [$tag] } } }
  ) {
    nodes {
      id
      excerpt(pruneLength: 250)
      frontmatter {
        title
        date(formatString: "MMM D YYYY")
      }
      fields {
        slug
      }
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

export default Tag