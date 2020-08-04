import React, { useContext, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "../components/navBar"
import "./style/layout.css"
import SEO from "./seo"
import "./style/style.scss"
import "./style/util.scss"
import {monitorAuth} from "../firebase/firebaseService"
import {UserStateContext} from "../context/GlobalUserContext"
import {UserDispatchContext} from "../context/GlobalUserContext"


const Layout = ({ children }) => {
  const [user, setUser] = useState()
  const dispatch = useContext(UserDispatchContext)
  const state = useContext(UserStateContext)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

monitorAuth(setUser)

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
