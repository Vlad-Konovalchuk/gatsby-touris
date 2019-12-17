import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import { Link } from "gatsby"

export default function errorPage() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops, something wrong">
          <Link to="/" >back to home page</Link>
        </Banner>
      </header>
    </Layout>
  )
}
