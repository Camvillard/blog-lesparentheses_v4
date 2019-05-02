const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const createWpPosts = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)

    query.then(result => {
      // if there are errors, diplasy them in the console
      if (result.errors) {
        console.error(results.errors)
        reject(result.error)
      }
      // get the edges from the graphql query
      const postEdges = result.data.allWordpressPost.edges

      // for each result, create a page (API from gatsby)
      // using the slug as url, the template as component
      // and the id as id (the contexte can have pretty much anything
      // we want inside)
      postEdges.forEach( edge => {
        createPage({
          path: `/${edge.node.slug}`,
          component: path.resolve(`./src/templates/post.jsx`),
          context: {
            id: edge.node.id
          },
        })
      })
      resolve()
    })
  });

  const createWpTagsPages = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressTag {
          edges {
            node {
              id
              slug
              name
            }
          }
        }
      }
    `)

    query.then(result => {
      // if there are errors, diplasy them in the console
      if (result.errors) {
        console.error(results.errors)
        reject(result.error)
      }
      // get the edges from the graphql query
      const tagEdges = result.data.allWordpressTag.edges

      // for each result, create a page (API from gatsby)
      // using the slug as url, the template as component
      // and the id as id (the context can have pretty much anything
      // we want inside)
      tagEdges.forEach( edge => {
        createPage({
          path: `/tags/${edge.node.slug}`,
          component: path.resolve(`./src/templates/tag.jsx`),
          context: {
            id: edge.node.id
          },
        })
      })
      resolve()
    })
  });

  return Promise.all([createWpPosts, createWpTagsPages])
} // createPages
