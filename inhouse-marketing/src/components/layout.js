import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "../components/navBar"
import "./layout.css"
import SEO from "./seo"
import "./util.css"

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
