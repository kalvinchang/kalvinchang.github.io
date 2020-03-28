import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data, pageContext }) => {
  return (
    <Layout pageContext={pageContext}>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
