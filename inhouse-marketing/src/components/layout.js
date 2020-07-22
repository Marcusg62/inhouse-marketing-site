import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "../components/navBar"
import "./style/layout.css"
import SEO from "./seo"
import "./style/style.scss"
import "./style/util.scss"
import {monitorAuth} from "../firebase/firebaseService"

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

  useEffect(() => {
    //everytime a layout is rendered, automatically it will moniter to see if a user is logged in
    monitorAuth()
  });

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
