import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "../components/navBar"
import "./style/layout.css"
import SEO from "./seo"
import "./style/style.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <SEO />
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  )
}


export default Layout
