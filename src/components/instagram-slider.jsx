// external librairies
import React from 'react';
import { StaticQuery, grapqhl } from 'gatsby';
import Img from "gatsby-image"


// internal stuff

// style


const InstagramPhoto = (props) =>  {
  return(
    <div>
      <Img key={props.id} fluid={props.fluid}/>
    </div>
  )
}


const Instagram = () => (
  <StaticQuery
    query = { graphql`
      query {
        allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 8) {
          edges {
            node {
              id
              localFile {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                }
              }
            }
          }
        }
      }
    `}
    render = { data => {
      {/* take only 4 elements if it's on mobile */}
      const instaData = window.innerWidth < 992 ? data.allInstaNode.edges.slice(0,4) : data.allInstaNode.edges
      return(
        <div id="instagram-footer">
        {/* starting the loop in data from instagram  */}
        { instaData.map( insta => <InstagramPhoto
          key={insta.node.id}
          fluid={insta.node.localFile.childImageSharp.fluid}ç
        />)}
        </div>
      )
    }}
  />
)


export default Instagram;

