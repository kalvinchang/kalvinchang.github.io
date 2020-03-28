/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

// TODO: array?? don't hardcode and get from filepath???
const pages = {
  '/': path.resolve("src/paging/index.js"),
  '/about': path.resolve("src/paging/about.js"),
  '/timeline': path.resolve("src/paging/timeline.js"),
  '/contact': path.resolve("src/paging/contact.js"),
  '/resume': path.resolve("src/paging/resume.js")
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  Object.keys(pages).forEach((route, i) => {
    createPage({
      path: route,
      component: pages[route],
      context: { currentPage: i + 1 },
    })
  })
}

// need to figure out how to paginate resume and about (should fall under same route but multiple pages within)