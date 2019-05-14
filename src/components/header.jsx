import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = (props) => (
  <header id="main-header">
    <h1>
      <Link to="/">
        {props.siteTitle}
      </Link>
    </h1>
    <h3>{props.tagline}</h3>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  tagline: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  tagline: ``,
}

export default Header
