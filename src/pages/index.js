import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import logo from "../images/Transparent.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div style={{ marginBottom: `1.45rem` }}>
      <img src={logo} alt="Logo" />
    </div>
  </Layout>
)

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "Transparent.svg" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
