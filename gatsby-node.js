const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// TODO: array?? don't hardcode and get from filepath???
// TODO: React hook
const pages = {
  '/': path.resolve("src/layouts/index.js"),
  '/about': path.resolve("src/layouts/about/collections.js"),
  '/about/timeline': path.resolve("src/layouts/about/timeline.js"),
  '/resume': path.resolve("src/layouts/resume/1.js"),
  '/resume/2': path.resolve("src/layouts/resume/2.js"),
  '/resume/3': path.resolve("src/layouts/resume/3.js"),
  '/resume/4': path.resolve("src/layouts/resume/4.js"),
  '/contact': path.resolve("src/layouts/contact.js"),
  '/blog': path.resolve("src/layouts/blog/entries.js"),
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/layouts/blog/post.js')
  const tagTemplate = path.resolve('src/layouts/blog/tag.js')

  const pageKeys = Object.keys(pages);
  pageKeys.forEach((route, i) => {
    createPage({
      path: route,
      component: pages[route],
      context: { 
        currentPage: i,
        numPages: pageKeys.length // TODO: self?? this??
      },
    })
  })

  return graphql(`
    {
      posts: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
      tagsGroup: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.posts.nodes

    // create page for each mdx file
    posts.forEach((post, index) => {
      const next = index === posts.length - 1 ? null : posts[index + 1]
      const previous = index === 0 ? null : posts[index - 1]

      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
          previous,
          next,
          blog: true,
        },
      })
    })

    const tags = result.data.tagsGroup.group
    
    // create page for each tag
    tags.forEach(tag => {
      createPage({
        path: `/tags/${tag.fieldValue}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })  
  })
}

// should blog previous next link to the rest of the website?
// what if post takes several pages?

// TODO: need to figure out how to paginate resume and about (should fall under same route but multiple pages within)