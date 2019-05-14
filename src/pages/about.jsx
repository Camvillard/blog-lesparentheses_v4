// external librairies
import React from 'react';
// import { graphql } from 'gatsby';

// internal stuff
import SEO from '../components/seo'

// import aboutData from '../data/about-data'
import internalData from '../data/internal-data';


// styles
import "../styles/main.scss"

class AboutPage extends React.Component {


  handleClick() {
    const aboutContent = document.querySelector('#aboutcontent')
  }


  render() {
    return (
      <div id="about-page-container">
      <SEO title="Home" keywords={internalData.seo} id="index-page" />
      <h1 className="text-uppercase">about</h1>

      <div id="about-sections">
        <h3 onClick={this.handleClick()}>1. general stuff</h3>
        <h3>2. trucs pros</h3>
        <h3>3. random infos</h3>
      </div>

      <div id="aboutcontent">
      <div id="general">test</div>

      </div>

      </div>
    )
  }
}

export default AboutPage;
