// external librairies
import React from 'react';
import { StaticQuery, grapqhl } from 'gatsby';
import Img from "gatsby-image";

// internal stuff
import Instagram from "./instagram-slider";

// style



class Footer extends React.Component {
  render() {
    return(
      <footer id="footer" className="text-light">
      <Instagram />
        <div id="left-footer">
        © {new Date().getFullYear()} - les parentheses | tous droits réservés
        </div>
        <div id="right-footer">
          fait avec mucho love par <a href="https://www.cdltbisou.com">cdltbisou</a>
        </div>
      </footer>
    )
  }
}

export default Footer;

