import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import HomePage from "./home.js"
import Footer from "../components/footer.js"
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const IndexPage = () => (
  <Layout>
    <HomePage></HomePage>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
