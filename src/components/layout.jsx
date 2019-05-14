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

const Layout = ({ children}) => {

  return (
    <div className="main-container">
    <Header siteTitle="prout titre" />
      <div>
      <h3>site cool</h3>
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

// export const query = graphql`
// query siteQuery {
//   sitePage {
//     id
//     path
//   }
// }
// `


