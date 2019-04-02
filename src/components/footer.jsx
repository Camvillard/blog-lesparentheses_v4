// external librairies
import React from 'react';

// internal stuff

// style

class Footer extends React.Component {
  render() {
    return(
      <div>
        <div id="left-footer">
        © {new Date().getFullYear()} - les parentheses | tous droits réservés
        </div>
        <div id="right-footer">
          fait avec mucho love par <a href="https://www.cdltbisou.com">cdltbisou</a>
        </div>
      </div>

    )
  }
}

export default Footer;
