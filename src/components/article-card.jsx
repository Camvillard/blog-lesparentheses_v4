// external librairies
import React from 'react';
import { graphql, Link } from 'gatsby';


// internal stuff

// style

const ArticleCard = (props) => {
  return(
    <div className="article-card">
    <Link to={props.url}>
      <h3>{props.title}</h3>
      <p>{props.excerpt}</p>
    </Link>

    </div>
  )
}

export default ArticleCard;
