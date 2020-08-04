import React, { useEffect, useState,useContext } from "react"
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
  const dispatch = useContext(UserDispatchContext)
  const state = useContext(UserStateContext)
  console.log(state)
  console.log(dispatch)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // monitorAuth().then(user => {
  //   dispatch({type: })
  // })


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
