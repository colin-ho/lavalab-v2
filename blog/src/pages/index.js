import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HomePage from "./home.js"
import Footer from "../components/footer.js"
import SmoothScroll from "smooth-scroll"

const IndexPage = () => {
    useEffect(() => {
        var scroll = new SmoothScroll('a[href*="#"]', {
            speed: 1500,
            speedAsDuration: true
        });
    }, [])

    return (
        <Layout>
            <SEO />
            <HomePage></HomePage>
            <Footer></Footer>
        </Layout>
    )
}

export default IndexPage
