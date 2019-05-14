// external librairies
import React from 'react';
import { graphql } from 'gatsby';


// internal stuff
import ArticleCard from '../components/article-card';
import internalData from '../data/internal-data';
import Layout from '../components/layout';

// style

class Articles extends React.Component {
  render() {
    const data = this.props.data.allWordpressPost
    return(
      <Layout>
        {data.edges.map( edge =>
          <h3 key={edge.node.id}> {edge.node.title} </h3>
        )}
        <ArticleCard
          title="prout"
          url="/about"
          excerpt="salut ceci est l'extrait du texte"
        />
        <h4>total count:{data.totalCount}</h4>
        <p> first article : {data.edges[0].node.title}</p>
      </Layout>
    )
  }
}

export default Articles;



// const IndexPage = ({data}) => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <h1>Welcome to the Gatsby demo</h1>
//     <h3>There are {data.allWordpressPost.totalCount} posts</h3>

//     {data.allWordpressPost.edges.map(({ node }) => (
//       <div key={node.id}>
//         <Link to={node.slug}>
//           <h4><span dangerouslySetInnerHTML={{ __html: node.title }}/> - {node.date}</h4>
//         </Link>
//         <div dangerouslySetInnerHTML= {{ __html: node.excerpt }} />
//       </div>
//     ))}

//   </Layout>
// )

export const postQuery = graphql`
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
        }
      }
    }
  }
`
