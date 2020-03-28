/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

// TODO: array?? don't hardcode and get from filepath???
const pages = {
  '/': path.resolve("src/layouts/index.js"),
  '/about': path.resolve("src/layouts/about.js"),
  '/timeline': path.resolve("src/layouts/timeline.js"),
  '/contact': path.resolve("src/layouts/contact.js"),
  '/resume': path.resolve("src/layouts/resume.js")
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  Object.keys(pages).forEach((route, i) => {
    createPage({
      path: route,
      component: pages[route],
      context: { currentPage: i },
    })
  })
}

// need to figure out how to paginate resume and about (should fall under same route but multiple pages within)