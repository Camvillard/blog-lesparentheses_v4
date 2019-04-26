// external librairies
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
// import { StaticQuery, graphql } from "gatsby"

// internal stuff
import internalData from "../data/internal-data.js"
import Header from "./header"
import Footer from "./footer"


// importing styles
import '../styles/main.scss';

const Layout = ({ children, data }) => {

  return (
    <div className="main-container">
    <Header siteTitle={internalData.site} />
      <div>
      <h3>{internalData.description}</h3>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )

}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

export const query = graphql`
query siteQuery {
  sitePage {
    id
    path
  }
}
`


