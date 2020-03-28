const path = require('path')

// TODO: array?? don't hardcode and get from filepath???
const pages = {
  '/': path.resolve("src/layouts/index.js"),
  '/about': path.resolve("src/layouts/about.js"),
  // '/timeline': path.resolve("src/layouts/timeline.js"),
  '/resume': path.resolve("src/layouts/resume.js"),
  '/contact': path.resolve("src/layouts/contact.js"),
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

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
}

// need to figure out how to paginate resume and about (should fall under same route but multiple pages within)