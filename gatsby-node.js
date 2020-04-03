const path = require('path')

// TODO: array?? don't hardcode and get from filepath???
const pages = {
  '/': path.resolve("src/layouts/index.js"),
  '/about': path.resolve("src/layouts/about/collections.js"),
  '/about/timeline': path.resolve("src/layouts/about/timeline.js"),
  '/blog': path.resolve("src/layouts/blog/entries.js"),
  '/resume': path.resolve("src/layouts/resume/1.js"),
  '/resume/2': path.resolve("src/layouts/resume/2.js"),
  '/resume/3': path.resolve("src/layouts/resume/3.js"),
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