import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import MainBanner from "../components/MainBanner"
import Banner from "../components/Banner"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <MainBanner>
      <Banner
        title="Awesome Api0"
        info="Come and Explore Hapi, the city of ruins, which is a UNESCO World Heritage Site"
      >
        <Link className="btn-white" to="/places">
          expolore places
        </Link>
      </Banner>
    </MainBanner>
  </Layout>
)
