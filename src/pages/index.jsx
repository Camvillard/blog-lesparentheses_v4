import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import internalData from '../data/internal-data';


class IndexPage extends React.Component {
  render() {
    const data = this.props.data.allWordpressPost.edges
    const firstArticle = data[0].node
    console.log(data)
    return(
      <Layout>
        <SEO title="Home" keywords={internalData.seo} id="index-page" />

        <h3>le dernier article</h3>
        <div className="first-article">

          <h3 dangerouslySetInnerHTML= {{ __html: firstArticle.title}} />
          <p dangerouslySetInnerHTML= {{ __html: firstArticle.excerpt}} />

        </div>
      </Layout>
    )
  }
}

// const IndexPage = () => (
// )

export default IndexPage;

export const pageQuery = graphql `
query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "Do MMMM")
          tags {
            name
          }
          categories {
            name
          }
        }
      }
    }
  }
`

