import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';

import { extractTags } from '../helpers/extract-tags';

const Post = ({ data }) => {

  const post = data.wordpressPost
  const featuredImage = post.featured_media.source_url

  return(
    <Layout>
    <div>
    <SEO title={`${post.title}`} keywords={[`gatsby`, `application`, `react`]} id={post.slug ? `${post.slug}` : ''} />
      <img src={featuredImage} alt=""/>
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
      featured_media {
        source_url
      }
      title
      date(formatString: "Do MMMM YYYY")
      content
      slug
    }
  }
`

