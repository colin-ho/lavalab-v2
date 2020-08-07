import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import HomePage from "./home.js"
import Footer from "../components/footer.js"


const IndexPage = () => (
  <Layout>
    <HomePage></HomePage>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
