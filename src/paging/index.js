import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data, pageContext }) => {
  console.log(pageContext);
  return (
  <Layout>
    <SEO title="Home" />
  </Layout>
)}

export default IndexPage
