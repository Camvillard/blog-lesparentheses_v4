import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { extractTags } from '../helpers/extract-tags';

const Post = ({ data }) => {

  const post = data.wordpressPost

  return(
    <Layout>
    <div>
      <h1 dangerouslySetInnerHTML={{__html: post.title}} />
      <h3>
        date: {post.date} tags: {extractTags(post)}{' '}
      </h3>
      <div dangerouslySetInnerHTML= {{__html: post.content}} />
    </div>
    </Layout>
  )
}
export default Post;

export const query = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      date(formatString: "Do MMMM YYYY")
      content
    }
  }
`

