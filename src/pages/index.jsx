import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import internalData from '../data/internal-data';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={internalData.seo} id="index-page" />
    <h1>everything is a work in progress.</h1>
  </Layout>
)

export default IndexPage
